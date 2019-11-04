import { ConstraintLayoutBase } from "./constraint-layout-common";

export class ConstraintLayout extends ConstraintLayoutBase {
    nativeViewProtected: androidx.constraintlayout.widget.ConstraintLayout;

    public createNativeView() {
        return new androidx.constraintlayout.widget.ConstraintLayout(this._context);
    }
}
