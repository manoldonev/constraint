import * as application from "tns-core-modules/application";

import { ConstraintLayout } from "./constraint";
import * as data from "./data.json";

const componentTypes = {
    "Label": "ui/label",
    "Button": "ui/button"
};

application.run({ create: () => {

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
        const layoutId = android.view.View.generateViewId();
        constraintLayout.nativeViewProtected.setId(layoutId);

        views.forEach(view => {
            view.nativeViewProtected.setId(view.id);
        });

        const constraintSet = new androidx.constraintlayout.widget.ConstraintSet();

        data.constraints.forEach(constraint => {
            if (constraint.attr === "HEIGHT") {
                constraintSet.constrainHeight(constraint.item, constraint.const);
            } else if (constraint.attr === "WIDTH") {
                constraintSet.constrainWidth(constraint.item, constraint.const);
            } else {
                constraintSet.connect(
                    constraint.item, 
                    androidx.constraintlayout.widget.ConstraintSet[constraint.attr], 
                    constraint.to === 0 ? androidx.constraintlayout.widget.ConstraintSet.PARENT_ID : constraint.to, 
                    androidx.constraintlayout.widget.ConstraintSet[constraint.toAttr], 
                    constraint.const
                );
            }
        });

        constraintSet.applyTo(constraintLayout.nativeViewProtected);
    });

    return constraintLayout;
} });

