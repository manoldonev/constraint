import * as application from "tns-core-modules/application";
import { isAndroid } from "tns-core-modules/platform";
import { Color } from "tns-core-modules/color";
import { layout } from "tns-core-modules/ui/core/view-base";

import { ConstraintLayout } from "./constraint-layout";
import * as data from "./data.json";

const componentTypes = {
    "Label": "ui/label",
    "Button": "ui/button"
};

application.run({
    create: () => {

        const views = [];

        data.views.forEach(dataView => {
            const module: Object = global.loadModule(componentTypes[dataView.type], false);
            const instanceType = module[dataView.type] || Object;
            const view = new instanceType();
            view.text = dataView.text;
            view.backgroundColor = dataView.backgroundColor;
            view.id = dataView.id;
            views.push(view);
        });

        const constraintLayout = new ConstraintLayout();

        views.forEach(view => {
            constraintLayout.addChild(view);
        });

        constraintLayout.on("loaded", () => {
            if (isAndroid) {
                const layoutId = android.view.View.generateViewId();
                constraintLayout.nativeViewProtected.setId(layoutId);

                views.forEach(view => {
                    view.nativeViewProtected.setId(view.id);
                });

                const constraintSet = new androidx.constraintlayout.widget.ConstraintSet();

                data.constraints.forEach(constraint => {
                    if (constraint.attr === "HEIGHT") {
                        constraintSet.constrainHeight(constraint.item, constraint.margin);
                    } else if (constraint.attr === "WIDTH") {
                        constraintSet.constrainWidth(constraint.item, constraint.margin);
                    } else {
                        constraintSet.connect(
                            constraint.item,
                            androidx.constraintlayout.widget.ConstraintSet[constraint.attr],
                            constraint.to === 0 ? androidx.constraintlayout.widget.ConstraintSet.PARENT_ID : constraint.to,
                            androidx.constraintlayout.widget.ConstraintSet[constraint.toAttr],
                            constraint.margin
                        );
                    }
                });

                constraintSet.applyTo(constraintLayout.nativeViewProtected);
            } else {
                views.forEach(view => {
                    const nativeView = <UIView>view.nativeViewProtected;
                    
                    if (view.id === 1) {
                        nativeView.backgroundColor = UIColor.magentaColor;
                    } else if (view.id === 2) {
                        nativeView.backgroundColor = UIColor.yellowColor;
                    }
                    
                    nativeView.translatesAutoresizingMaskIntoConstraints = false;
                });

                data.constraints.forEach(constraint => {
                    const view = views.filter(view => view.id === constraint.item)[0];
                    const nativeView = view.nativeViewProtected;

                    if (constraint.attr === "HEIGHT") {
                        const heightConstraint = NSLayoutConstraint.constraintWithItemAttributeRelatedByToItemAttributeMultiplierConstant(
                            nativeView,
                            NSLayoutAttribute.Height,
                            NSLayoutRelation.Equal,
                            null,
                            NSLayoutAttribute.NotAnAttribute,
                            1,
                            layout.toDeviceIndependentPixels(constraint.margin)
                        );

                        heightConstraint.active = true;
                    } else if (constraint.attr === "WIDTH") {
                        const widthConstraint = NSLayoutConstraint.constraintWithItemAttributeRelatedByToItemAttributeMultiplierConstant(
                            nativeView,
                            NSLayoutAttribute.Width,
                            NSLayoutRelation.Equal,
                            null,
                            NSLayoutAttribute.NotAnAttribute,
                            1,
                            layout.toDeviceIndependentPixels(constraint.margin)
                        );

                        widthConstraint.active = true;
                    } else {
                        let relativeView;
                        if (constraint.to === 0) {
                            relativeView = constraintLayout;
                        } else {
                            relativeView = views.filter(view => view.id === constraint.to)[0];
                        }

                        const locationConstraint = NSLayoutConstraint.constraintWithItemAttributeRelatedByToItemAttributeMultiplierConstant(
                            nativeView,
                            convertToLayoutAttribute(constraint.attr),
                            NSLayoutRelation.Equal,
                            relativeView.nativeViewProtected,
                            convertToLayoutAttribute(constraint.toAttr),
                            1,
                            layout.toDeviceIndependentPixels(constraint.margin)
                        );

                        locationConstraint.active = true;
                    }
                });
            }
        });

        return constraintLayout;
    }
});

function convertToLayoutAttribute(attr: string) {
    if (attr === "LEFT") {
        return NSLayoutAttribute.Left;
    } else if (attr === "RIGHT") {
        return NSLayoutAttribute.Right;
    } else if (attr === "TOP") {
        return NSLayoutAttribute.Top;
    } else if (attr === "BOTTOM") {
        return NSLayoutAttribute.Bottom;
    }

    return NSLayoutAttribute.NotAnAttribute;
}
