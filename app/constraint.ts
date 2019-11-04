import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base";

export class ConstraintLayout extends LayoutBase {
    nativeViewProtected: androidx.constraintlayout.widget.ConstraintLayout;

    public createNativeView() {
        return new androidx.constraintlayout.widget.ConstraintLayout(this._context);
    }


}
