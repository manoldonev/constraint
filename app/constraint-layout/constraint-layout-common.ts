import { ConstraintLayout as ConstraintLayoutDefinition } from ".";
import { LayoutBase, CSSType } from "tns-core-modules/ui/layouts/layout-base";

@CSSType("ConstraintLayout")
export class ConstraintLayoutBase extends LayoutBase implements ConstraintLayoutDefinition {

    public onLayout(left: number, top: number, right: number, bottom: number): void {
        //
    }
}
