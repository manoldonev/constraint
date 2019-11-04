import { View, layout } from "tns-core-modules/ui/layouts/absolute-layout/absolute-layout-common";

import { ConstraintLayoutBase } from "./constraint-layout-common";

export class ConstraintLayout extends ConstraintLayoutBase {
    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);

        let measureWidth = 0;
        let measureHeight = 0;

        const width = layout.getMeasureSpecSize(widthMeasureSpec);
        const widthMode = layout.getMeasureSpecMode(widthMeasureSpec);

        const height = layout.getMeasureSpecSize(heightMeasureSpec);
        const heightMode = layout.getMeasureSpecMode(heightMeasureSpec);

        const childMeasureSpec = layout.makeMeasureSpec(0, layout.UNSPECIFIED);

        this.eachLayoutChild((child, last) => {
            let childSize = View.measureChild(this, child, childMeasureSpec, childMeasureSpec);
            measureWidth = Math.max(measureWidth, child.effectiveLeft + childSize.measuredWidth);
            measureHeight = Math.max(measureHeight, child.effectiveTop + childSize.measuredHeight);
        });

        measureWidth += this.effectiveBorderLeftWidth + this.effectivePaddingLeft + this.effectivePaddingRight + this.effectiveBorderRightWidth;
        measureHeight += this.effectiveBorderTopWidth + this.effectivePaddingTop + this.effectivePaddingBottom + this.effectiveBorderBottomWidth;

        measureWidth = Math.max(measureWidth, this.effectiveMinWidth);
        measureHeight = Math.max(measureHeight, this.effectiveMinHeight);

        const widthAndState = View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        const heightAndState = View.resolveSizeAndState(measureHeight, height, heightMode, 0);

        this.setMeasuredDimension(widthAndState, heightAndState);
    }
}
