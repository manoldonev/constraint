/// <reference path="android-declarations.d.ts"/>

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Barrier extends androidx.constraintlayout.widget.ConstraintHelper {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Barrier>;
				public static LEFT: number;
				public static TOP: number;
				public static RIGHT: number;
				public static BOTTOM: number;
				public static START: number;
				public static END: number;
				public setType(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getType(): number;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setAllowsGoneWidget(param0: boolean): void;
				public allowsGoneWidget(): boolean;
				public init(param0: globalAndroid.util.AttributeSet): void;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export abstract class ConstraintHelper {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintHelper>;
				public mIds: native.Array<number>;
				public mCount: number;
				public myContext: globalAndroid.content.Context;
				public mHelperWidget: androidx.constraintlayout.solver.widgets.Helper;
				public mUseViewMeasure: boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getReferencedIds(): native.Array<number>;
				public updatePostMeasure(param0: androidx.constraintlayout.widget.ConstraintLayout): void;
				public init(param0: globalAndroid.util.AttributeSet): void;
				public updatePreLayout(param0: androidx.constraintlayout.widget.ConstraintLayout): void;
				public validateParams(): void;
				public updatePostLayout(param0: androidx.constraintlayout.widget.ConstraintLayout): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public constructor(param0: globalAndroid.content.Context);
				public setTag(param0: number, param1: any): void;
				public onMeasure(param0: number, param1: number): void;
				public setReferencedIds(param0: native.Array<number>): void;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class ConstraintLayout {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayout>;
				public static VERSION: string;
				public static DESIGN_INFO_ID: number;
				public setMaxWidth(param0: number): void;
				public getMinHeight(): number;
				public getViewWidget(param0: globalAndroid.view.View): androidx.constraintlayout.solver.widgets.ConstraintWidget;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public removeView(param0: globalAndroid.view.View): void;
				public setMinHeight(param0: number): void;
				public getMaxWidth(): number;
				public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public generateDefaultLayoutParams(): androidx.constraintlayout.widget.ConstraintLayout.LayoutParams;
				public getMaxHeight(): number;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): androidx.constraintlayout.widget.ConstraintLayout.LayoutParams;
				public getViewById(param0: number): globalAndroid.view.View;
				public getDesignInformation(param0: number, param1: any): any;
				public requestLayout(): void;
				public constructor(param0: globalAndroid.content.Context);
				public getMinWidth(): number;
				public setId(param0: number): void;
				public fillMetrics(param0: androidx.constraintlayout.solver.Metrics): void;
				public getOptimizationLevel(): number;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onViewRemoved(param0: globalAndroid.view.View): void;
				public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
				public onViewAdded(param0: globalAndroid.view.View): void;
				public onMeasure(param0: number, param1: number): void;
				public setMaxHeight(param0: number): void;
				public setMinWidth(param0: number): void;
				public setOptimizationLevel(param0: number): void;
				public solveLinearSystem(param0: string): void;
				public setDesignInformation(param0: number, param1: any, param2: any): void;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setConstraintSet(param0: androidx.constraintlayout.widget.ConstraintSet): void;
				public shouldDelayChildPressedState(): boolean;
			}
			export module ConstraintLayout {
				export class LayoutParams {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayout.LayoutParams>;
					public static MATCH_CONSTRAINT: number;
					public static PARENT_ID: number;
					public static UNSET: number;
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static LEFT: number;
					public static RIGHT: number;
					public static TOP: number;
					public static BOTTOM: number;
					public static BASELINE: number;
					public static START: number;
					public static END: number;
					public static MATCH_CONSTRAINT_WRAP: number;
					public static MATCH_CONSTRAINT_SPREAD: number;
					public static MATCH_CONSTRAINT_PERCENT: number;
					public static CHAIN_SPREAD: number;
					public static CHAIN_SPREAD_INSIDE: number;
					public static CHAIN_PACKED: number;
					public guideBegin: number;
					public guideEnd: number;
					public guidePercent: number;
					public leftToLeft: number;
					public leftToRight: number;
					public rightToLeft: number;
					public rightToRight: number;
					public topToTop: number;
					public topToBottom: number;
					public bottomToTop: number;
					public bottomToBottom: number;
					public baselineToBaseline: number;
					public circleConstraint: number;
					public circleRadius: number;
					public circleAngle: number;
					public startToEnd: number;
					public startToStart: number;
					public endToStart: number;
					public endToEnd: number;
					public goneLeftMargin: number;
					public goneTopMargin: number;
					public goneRightMargin: number;
					public goneBottomMargin: number;
					public goneStartMargin: number;
					public goneEndMargin: number;
					public horizontalBias: number;
					public verticalBias: number;
					public dimensionRatio: string;
					public horizontalWeight: number;
					public verticalWeight: number;
					public horizontalChainStyle: number;
					public verticalChainStyle: number;
					public matchConstraintDefaultWidth: number;
					public matchConstraintDefaultHeight: number;
					public matchConstraintMinWidth: number;
					public matchConstraintMinHeight: number;
					public matchConstraintMaxWidth: number;
					public matchConstraintMaxHeight: number;
					public matchConstraintPercentWidth: number;
					public matchConstraintPercentHeight: number;
					public editorAbsoluteX: number;
					public editorAbsoluteY: number;
					public orientation: number;
					public constrainedWidth: boolean;
					public constrainedHeight: boolean;
					public helped: boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public reset(): void;
					public resolveLayoutDirection(param0: number): void;
					public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(param0: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams);
					public validate(): void;
					public constructor(param0: number, param1: number);
				}
				export module LayoutParams {
					export class Table {
						public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayout.LayoutParams.Table>;
						public static UNUSED: number;
						public static ANDROID_ORIENTATION: number;
						public static LAYOUT_CONSTRAINT_CIRCLE: number;
						public static LAYOUT_CONSTRAINT_CIRCLE_RADIUS: number;
						public static LAYOUT_CONSTRAINT_CIRCLE_ANGLE: number;
						public static LAYOUT_CONSTRAINT_GUIDE_BEGIN: number;
						public static LAYOUT_CONSTRAINT_GUIDE_END: number;
						public static LAYOUT_CONSTRAINT_GUIDE_PERCENT: number;
						public static LAYOUT_CONSTRAINT_LEFT_TO_LEFT_OF: number;
						public static LAYOUT_CONSTRAINT_LEFT_TO_RIGHT_OF: number;
						public static LAYOUT_CONSTRAINT_RIGHT_TO_LEFT_OF: number;
						public static LAYOUT_CONSTRAINT_RIGHT_TO_RIGHT_OF: number;
						public static LAYOUT_CONSTRAINT_TOP_TO_TOP_OF: number;
						public static LAYOUT_CONSTRAINT_TOP_TO_BOTTOM_OF: number;
						public static LAYOUT_CONSTRAINT_BOTTOM_TO_TOP_OF: number;
						public static LAYOUT_CONSTRAINT_BOTTOM_TO_BOTTOM_OF: number;
						public static LAYOUT_CONSTRAINT_BASELINE_TO_BASELINE_OF: number;
						public static LAYOUT_CONSTRAINT_START_TO_END_OF: number;
						public static LAYOUT_CONSTRAINT_START_TO_START_OF: number;
						public static LAYOUT_CONSTRAINT_END_TO_START_OF: number;
						public static LAYOUT_CONSTRAINT_END_TO_END_OF: number;
						public static LAYOUT_GONE_MARGIN_LEFT: number;
						public static LAYOUT_GONE_MARGIN_TOP: number;
						public static LAYOUT_GONE_MARGIN_RIGHT: number;
						public static LAYOUT_GONE_MARGIN_BOTTOM: number;
						public static LAYOUT_GONE_MARGIN_START: number;
						public static LAYOUT_GONE_MARGIN_END: number;
						public static LAYOUT_CONSTRAINED_WIDTH: number;
						public static LAYOUT_CONSTRAINED_HEIGHT: number;
						public static LAYOUT_CONSTRAINT_HORIZONTAL_BIAS: number;
						public static LAYOUT_CONSTRAINT_VERTICAL_BIAS: number;
						public static LAYOUT_CONSTRAINT_WIDTH_DEFAULT: number;
						public static LAYOUT_CONSTRAINT_HEIGHT_DEFAULT: number;
						public static LAYOUT_CONSTRAINT_WIDTH_MIN: number;
						public static LAYOUT_CONSTRAINT_WIDTH_MAX: number;
						public static LAYOUT_CONSTRAINT_WIDTH_PERCENT: number;
						public static LAYOUT_CONSTRAINT_HEIGHT_MIN: number;
						public static LAYOUT_CONSTRAINT_HEIGHT_MAX: number;
						public static LAYOUT_CONSTRAINT_HEIGHT_PERCENT: number;
						public static LAYOUT_CONSTRAINT_LEFT_CREATOR: number;
						public static LAYOUT_CONSTRAINT_TOP_CREATOR: number;
						public static LAYOUT_CONSTRAINT_RIGHT_CREATOR: number;
						public static LAYOUT_CONSTRAINT_BOTTOM_CREATOR: number;
						public static LAYOUT_CONSTRAINT_BASELINE_CREATOR: number;
						public static LAYOUT_CONSTRAINT_DIMENSION_RATIO: number;
						public static LAYOUT_CONSTRAINT_HORIZONTAL_WEIGHT: number;
						public static LAYOUT_CONSTRAINT_VERTICAL_WEIGHT: number;
						public static LAYOUT_CONSTRAINT_HORIZONTAL_CHAINSTYLE: number;
						public static LAYOUT_CONSTRAINT_VERTICAL_CHAINSTYLE: number;
						public static LAYOUT_EDITOR_ABSOLUTEX: number;
						public static LAYOUT_EDITOR_ABSOLUTEY: number;
						public static map: globalAndroid.util.SparseIntArray;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class ConstraintSet {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet>;
				public static UNSET: number;
				public static MATCH_CONSTRAINT: number;
				public static WRAP_CONTENT: number;
				public static MATCH_CONSTRAINT_WRAP: number;
				public static MATCH_CONSTRAINT_SPREAD: number;
				public static PARENT_ID: number;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public static HORIZONTAL_GUIDELINE: number;
				public static VERTICAL_GUIDELINE: number;
				public static VISIBLE: number;
				public static INVISIBLE: number;
				public static GONE: number;
				public static LEFT: number;
				public static RIGHT: number;
				public static TOP: number;
				public static BOTTOM: number;
				public static BASELINE: number;
				public static START: number;
				public static END: number;
				public static CHAIN_SPREAD: number;
				public static CHAIN_SPREAD_INSIDE: number;
				public static CHAIN_PACKED: number;
				public clear(param0: number): void;
				public setVerticalChainStyle(param0: number, param1: number): void;
				public applyTo(param0: androidx.constraintlayout.widget.ConstraintLayout): void;
				public setAlpha(param0: number, param1: number): void;
				public constrainPercentWidth(param0: number, param1: number): void;
				public createHorizontalChain(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: native.Array<number>, param6: number): void;
				public setTranslation(param0: number, param1: number, param2: number): void;
				public center(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public setGuidelinePercent(param0: number, param1: number): void;
				public centerHorizontally(param0: number, param1: number): void;
				public constructor();
				public setDimensionRatio(param0: number, param1: string): void;
				public centerVertically(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public setElevation(param0: number, param1: number): void;
				public clone(param0: androidx.constraintlayout.widget.ConstraintLayout): void;
				public setGoneMargin(param0: number, param1: number, param2: number): void;
				public setBarrierType(param0: number, param1: number): void;
				public constrainWidth(param0: number, param1: number): void;
				public clear(param0: number, param1: number): void;
				public connect(param0: number, param1: number, param2: number, param3: number): void;
				public createHorizontalChainRtl(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: native.Array<number>, param6: number): void;
				public setGuidelineEnd(param0: number, param1: number): void;
				public setVisibility(param0: number, param1: number): void;
				public getApplyElevation(param0: number): boolean;
				public clone(param0: androidx.constraintlayout.widget.ConstraintSet): void;
				public setHorizontalWeight(param0: number, param1: number): void;
				public setApplyElevation(param0: number, param1: boolean): void;
				public clone(param0: globalAndroid.content.Context, param1: number): void;
				public setScaleY(param0: number, param1: number): void;
				public constrainCircle(param0: number, param1: number, param2: number, param3: number): void;
				public setRotationY(param0: number, param1: number): void;
				public setRotationX(param0: number, param1: number): void;
				public createVerticalChain(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: native.Array<number>, param6: number): void;
				public setMargin(param0: number, param1: number, param2: number): void;
				public setTranslationX(param0: number, param1: number): void;
				public setTranslationY(param0: number, param1: number): void;
				public setVerticalWeight(param0: number, param1: number): void;
				public getParameters(param0: number): androidx.constraintlayout.widget.ConstraintSet.Constraint;
				public setTranslationZ(param0: number, param1: number): void;
				public constrainDefaultHeight(param0: number, param1: number): void;
				public constrainPercentHeight(param0: number, param1: number): void;
				public constrainHeight(param0: number, param1: number): void;
				public centerHorizontallyRtl(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public connect(param0: number, param1: number, param2: number, param3: number, param4: number): void;
				public centerVertically(param0: number, param1: number): void;
				public constrainMaxHeight(param0: number, param1: number): void;
				public setVerticalBias(param0: number, param1: number): void;
				public addToHorizontalChain(param0: number, param1: number, param2: number): void;
				public setTransformPivot(param0: number, param1: number, param2: number): void;
				public setScaleX(param0: number, param1: number): void;
				public setHorizontalChainStyle(param0: number, param1: number): void;
				public setRotation(param0: number, param1: number): void;
				public load(param0: globalAndroid.content.Context, param1: number): void;
				public addToHorizontalChainRTL(param0: number, param1: number, param2: number): void;
				public removeFromHorizontalChain(param0: number): void;
				public setTransformPivotX(param0: number, param1: number): void;
				public centerHorizontally(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public setTransformPivotY(param0: number, param1: number): void;
				public centerHorizontallyRtl(param0: number, param1: number): void;
				public constrainMinHeight(param0: number, param1: number): void;
				public constrainDefaultWidth(param0: number, param1: number): void;
				public setGuidelineBegin(param0: number, param1: number): void;
				public setHorizontalBias(param0: number, param1: number): void;
				public constrainMaxWidth(param0: number, param1: number): void;
				public clone(param0: androidx.constraintlayout.widget.Constraints): void;
				public createBarrier(param0: number, param1: number, param2: native.Array<number>): void;
				public create(param0: number, param1: number): void;
				public constrainMinWidth(param0: number, param1: number): void;
				public addToVerticalChain(param0: number, param1: number, param2: number): void;
				public removeFromVerticalChain(param0: number): void;
			}
			export module ConstraintSet {
				export class Constraint {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.Constraint>;
					public mWidth: number;
					public mHeight: number;
					public guideBegin: number;
					public guideEnd: number;
					public guidePercent: number;
					public leftToLeft: number;
					public leftToRight: number;
					public rightToLeft: number;
					public rightToRight: number;
					public topToTop: number;
					public topToBottom: number;
					public bottomToTop: number;
					public bottomToBottom: number;
					public baselineToBaseline: number;
					public startToEnd: number;
					public startToStart: number;
					public endToStart: number;
					public endToEnd: number;
					public horizontalBias: number;
					public verticalBias: number;
					public dimensionRatio: string;
					public circleConstraint: number;
					public circleRadius: number;
					public circleAngle: number;
					public editorAbsoluteX: number;
					public editorAbsoluteY: number;
					public orientation: number;
					public leftMargin: number;
					public rightMargin: number;
					public topMargin: number;
					public bottomMargin: number;
					public endMargin: number;
					public startMargin: number;
					public visibility: number;
					public goneLeftMargin: number;
					public goneTopMargin: number;
					public goneRightMargin: number;
					public goneBottomMargin: number;
					public goneEndMargin: number;
					public goneStartMargin: number;
					public verticalWeight: number;
					public horizontalWeight: number;
					public horizontalChainStyle: number;
					public verticalChainStyle: number;
					public alpha: number;
					public applyElevation: boolean;
					public elevation: number;
					public rotation: number;
					public rotationX: number;
					public rotationY: number;
					public scaleX: number;
					public scaleY: number;
					public transformPivotX: number;
					public transformPivotY: number;
					public translationX: number;
					public translationY: number;
					public translationZ: number;
					public constrainedWidth: boolean;
					public constrainedHeight: boolean;
					public widthDefault: number;
					public heightDefault: number;
					public widthMax: number;
					public heightMax: number;
					public widthMin: number;
					public heightMin: number;
					public widthPercent: number;
					public heightPercent: number;
					public mBarrierAllowsGoneWidgets: boolean;
					public mBarrierDirection: number;
					public mHelperType: number;
					public mReferenceIds: native.Array<number>;
					public mReferenceIdString: string;
					public applyTo(param0: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams): void;
					public clone(): androidx.constraintlayout.widget.ConstraintSet.Constraint;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Constraints {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Constraints>;
				public static TAG: string;
				public getConstraintSet(): androidx.constraintlayout.widget.ConstraintSet;
				public generateDefaultLayoutParams(): androidx.constraintlayout.widget.Constraints.LayoutParams;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): androidx.constraintlayout.widget.Constraints.LayoutParams;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			}
			export module Constraints {
				export class LayoutParams extends androidx.constraintlayout.widget.ConstraintLayout.LayoutParams {
					public static class: java.lang.Class<androidx.constraintlayout.widget.Constraints.LayoutParams>;
					public alpha: number;
					public applyElevation: boolean;
					public elevation: number;
					public rotation: number;
					public rotationX: number;
					public rotationY: number;
					public scaleX: number;
					public scaleY: number;
					public transformPivotX: number;
					public transformPivotY: number;
					public translationX: number;
					public translationY: number;
					public translationZ: number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: androidx.constraintlayout.widget.Constraints.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(param0: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams);
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Group extends androidx.constraintlayout.widget.ConstraintHelper {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Group>;
				public updatePostLayout(param0: androidx.constraintlayout.widget.ConstraintLayout): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public init(param0: globalAndroid.util.AttributeSet): void;
				public updatePreLayout(param0: androidx.constraintlayout.widget.ConstraintLayout): void;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Guideline {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Guideline>;
				public setGuidelinePercent(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onMeasure(param0: number, param1: number): void;
				public setGuidelineEnd(param0: number): void;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public setGuidelineBegin(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public setVisibility(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Placeholder {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Placeholder>;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setEmptyVisibility(param0: number): void;
				public getContent(): globalAndroid.view.View;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getEmptyVisibility(): number;
				public updatePostMeasure(param0: androidx.constraintlayout.widget.ConstraintLayout): void;
				public updatePreLayout(param0: androidx.constraintlayout.widget.ConstraintLayout): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public setContentId(param0: number): void;
			}
		}
	}
}

//Generics information:

