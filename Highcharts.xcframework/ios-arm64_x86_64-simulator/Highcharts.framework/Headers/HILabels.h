/**
* (c) 2009-2021 Highsoft AS
*
* License: www.highcharts.com/license
* For commercial usage, a valid license is required. To purchase a license for Highcharts iOS, please see our website: https://shop.highsoft.com/
* In case of questions, please contact sales@highsoft.com
*/

#import "HILabelsAccessibility.h"
#import "HIAnnotationMockPointOptionsObject.h"
#import "HIColor.h"
#import "HIFunction.h"
#import "HICSSObject.h"
#import "HIShadowOptionsObject.h"


/**
The axis labels show the number or category for each tick. Since v8.0.0: Labels are animated in categorized x-axis with updating data if `tickInterval` and `step` is set to 1.
*/
@interface HILabels: HIChartsJSONSerializable

/**
The label's pixel distance from the perimeter of the plot area. On cartesian charts, this is overridden if the `labels.y` setting is set. On polar charts, if it's a percentage string, it is interpreted the same as `series.radius`, so the label can be aligned under the gauge's shape.

**Defaults to** `15`.

**Try it**

* [Polar chart, labels centered under the arc](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/labels-distance/)
*/
@property(nonatomic, readwrite) id /* NSNumber, NSString */ distance;
/**
What part of the string the given position is anchored to. Can be one of `"left"`, `"center"` or `"right"`. The exact position also depends on the `labels.x` setting. Angular gauges and solid gauges defaults to `"center"`. Solid gauges with two labels have additional option `"auto"` for automatic horizontal and vertical alignment.

**Try it**

* [Left](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/labels-align-left/)
* [Solid gauge labels auto aligned](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/series-solidgauge/labels-auto-aligned/)
*/
@property(nonatomic, readwrite) NSString *align;
/**
The y position offset of all labels relative to the tick positions on the axis. For polar and radial axis consider the use of the `distance` option.

**Defaults to** `3`.

**Try it**

* [Y axis labels placed on grid lines](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-x/)
*/
@property(nonatomic, readwrite) NSNumber *y;
/**
The x position offset of all labels relative to the tick positions on the axis. Defaults to -15 for left axis, 15 for right axis.

**Try it**

* [Y axis labels placed on grid lines](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-x/)
*/
@property(nonatomic, readwrite) NSNumber *x;
/**
Horizontal axes only. The number of lines to spread the labels over to make room or tighter labels. 0 disables staggering.

**Try it**

* [Show labels over two lines](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-staggerlines/)
*/
@property(nonatomic, readwrite) NSNumber *staggerLines;
/**
When each category width is more than this many pixels, we don't apply auto rotation. Instead, we lay out the axis label with word wrap. A lower limit makes sense when the label contains multiple short words that don't extend the available horizontal space for each label.

**Defaults to** `80`.

**Try it**

* [Lower limit](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-autorotationlimit/)
*/
@property(nonatomic, readwrite) NSNumber *autoRotationLimit;
/**
Defines how the labels are be repositioned according to the 3D chart orientation. - `'offset'`: Maintain a fixed horizontal/vertical distance from  the tick marks, despite the chart orientation. This is the  backwards compatible behavior, and causes skewing of X and Z  axes. - `'chart'`: Preserve 3D position relative to the chart. This  looks nice, but hard to read if the text isn't forward-facing. - `'flap'`: Rotated text along the axis to compensate for the  chart orientation. This tries to maintain text as legible as  possible on all orientations. - `'ortho'`: Rotated text along the axis direction so that the  labels are orthogonal to the axis. This is very similar to  `'flap'`, but prevents skewing the labels (X and Y scaling are  still present).

**Accepted values:** `['offset', 'chart', 'flap', 'ortho']`.

**Defaults to** `offset`.

**Try it**

* [Skewed labels](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/3d/skewed-labels/)
*/
@property(nonatomic, readwrite) NSString *position3d;
/**
Rotation of the labels in degrees. When `undefined`, the `autoRotation` option takes precedence.

**Defaults to** `0`.

**Try it**

* [X axis labels rotated 90Â°](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-rotation/)
*/
@property(nonatomic, readwrite) NSNumber *rotation;
/**
CSS styles for the label. Use `whiteSpace: 'nowrap'` to prevent wrapping of category labels. Use `textOverflow: 'none'` to prevent ellipsis (dots). In styled mode, the labels are styled with the `.highcharts-axis-labels` class.

**Try it**

* [Red X axis labels](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-style/)
*/
@property(nonatomic, readwrite) HICSSObject *style;
/**
Whether to reserve space for the labels. By default, space is reserved for the labels in these cases: * On all horizontal axes. * On vertical axes if `label.align` is `right` on a left-side axis or `left` on a right-side axis. * On vertical axes if `label.align` is `center`. This can be turned off when for example the labels are rendered inside the plot area instead of outside.

**Try it**

* [No reserved space, labels inside plot](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-reservespace/)
* [Left-aligned labels on a vertical category axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-reservespace-true/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *reserveSpace;
/**
Whether to [use HTML](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html) to render the labels.
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *useHTML;
/**
If enabled, the axis labels will skewed to follow the perspective. This will fix overlapping labels and titles, but texts become less legible due to the distortion. The final appearance depends heavily on `labels.position3d`.

**Try it**

* [Skewed labels](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/3d/skewed-labels/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *skew3d;
/**
Callback JavaScript function to format the label. The value is given by `this.value`. Additional properties for `this` are `axis`, `chart`, `isFirst`, `isLast` and `text` which holds the value of the default formatter. Defaults to a built in function returning a formatted string depending on whether the axis is `category`, `datetime`, `numeric` or other.

**Try it**

* [Linked category names](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-formatter-linked/)
* [Modified numeric labels](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-formatter-extended/)
*/
@property(nonatomic, readwrite) HIFunction *formatter;
/**
For horizontal axes, the allowed degrees of label rotation to prevent overlapping labels. If there is enough space, labels are not rotated. As the chart gets narrower, it will start rotating the labels -45 degrees, then remove every second label and try again with rotations 0 and -45 etc. Set it to `undefined` to disable rotation, which will cause the labels to word-wrap if possible. Defaults to `[-45]`` on bottom and top axes, `undefined` on left and right axes.

**Defaults to** `undefined`.

**Try it**

* [Default auto rotation of 0 or -45](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-autorotation-default/)
* [Custom graded auto rotation](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-autorotation-0-90/)
*/
@property(nonatomic, readwrite) NSArray<NSNumber *> *autoRotation;
/**
Whether to allow the axis labels to overlap. When false, overlapping labels are hidden.

**Defaults to** `false`.

**Try it**

* [X axis labels overlap enabled](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-allowoverlap-true/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *allowOverlap;
/**
The Z index for the axis labels.

**Defaults to** `7`.
*/
@property(nonatomic, readwrite) NSNumber *zIndex;
/**
A format string for the axis label. The context is available as format string variables. For example, you can use `{text}` to insert the default formatted text. The recommended way of adding units for the label is using `text`, for example `{text} km`. To add custom numeric or datetime formatting, use `{value}` with formatting, for example `{value:.1f}` or `{value:%Y-%m-%d}`. See [format string](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting) for more examples of formatting. The default value is not specified due to the dynamic nature of the default implementation.

**Try it**

* [Add units to Y axis label](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/labels-format/)
* [Linked category names](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-format-linked/)
* [Custom number format](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-format-custom/)
*/
@property(nonatomic, readwrite) NSString *format;
/**
The pixel padding for axis labels, to ensure white space between them.

**Defaults to** `5`.
*/
@property(nonatomic, readwrite) NSNumber *padding;
/**
To show only every _n_'th label on the axis, set the step to _n_. Setting the step to 2 shows every other label. By default, when 0, the step is calculated automatically to avoid overlap. To prevent this, set it to 1\. This usually only happens on a category axis, and is often a sign that you have chosen the wrong axis type. Read more at [Axis docs](https://www.highcharts.com/docs/chart-concepts/axes) => What axis should I use?

**Try it**

* [Showing only every other axis label on a categorized x-axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-step/)
* [Auto steps on a category axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-step-auto/)
*/
@property(nonatomic, readwrite) NSNumber *step;
/**
How to handle overflowing labels on horizontal axis. If set to `"allow"`, it will not be aligned at all. By default it `"justify"` labels inside the chart area. If there is room to move it, it will be aligned to the edge, else it will be removed.

**Accepted values:** `["allow", "justify"]`.

**Defaults to** `justify`.
*/
@property(nonatomic, readwrite) NSString *overflow;
/**
Enable or disable the axis labels.

**Defaults to** `True`.

**Try it**

* [X axis labels disabled](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/labels-enabled/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *enabled;
/**
This option defines the point to which the label will be connected. It can be either the point which exists in the series - it is referenced by the point's id - or a new point with defined x, y properties and optionally axes.

**Try it**

* [Attach annotation to a mock point](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/mock-point/)
* [Attach annotation to a mock point with different ways](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/mock-points/)
*/
@property(nonatomic, readwrite) HIAnnotationMockPointOptionsObject *point;
/**
Whether the annotation is visible in the exported data table.

**Defaults to** `True`.

**Try it**

* [Do not include in the data export](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/include-in-data-export/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *includeInDataExport;
/**
The border radius in pixels for the annotaiton's label.

**Defaults to** `3`.

**Try it**

* [Set labels graphic options](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/label-presentation/)
*/
@property(nonatomic, readwrite) NSNumber *borderRadius;
/**
Alias for the format option.

**Try it**

* [Set labels text](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/label-text/)
*/
@property(nonatomic, readwrite) NSString *text;
/**
Accessibility options for an annotation label.
*/
@property(nonatomic, readwrite) HILabelsAccessibility *accessibility;
/**
Whether to hide the annotation's label that is outside the plot area.

**Try it**

* [Crop or justify labels](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/label-crop-overflow/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *crop;
/**
The name of a symbol to use for the border around the label. Symbols are predefined functions on the Renderer object.

**Defaults to** `callout`.

**Try it**

* [Available shapes for labels](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/shapes/)
*/
@property(nonatomic, readwrite) NSString *shape;
/**
The border color for the annotation's label.

**Defaults to** `#000000`.

**Try it**

* [Set labels graphic options](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/label-presentation/)
*/
@property(nonatomic, readwrite) HIColor *borderColor;
/**
The background color or gradient for the annotation's label.

**Defaults to** `rgba(0, 0, 0, 0.75)`.

**Try it**

* [Set labels graphic options](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/label-presentation/)
*/
@property(nonatomic, readwrite) HIColor *backgroundColor;
/**
The shadow of the box. The shadow can be an object configuration containing `color`, `offsetX`, `offsetY`, `opacity` and `width`.

**Try it**

* [Set labels graphic options](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/label-presentation/)
*/
@property(nonatomic, readwrite) HIShadowOptionsObject *shadow;
/**
The vertical alignment of the annotation's label.

**Defaults to** `bottom`.

**Try it**

* [Set labels position](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/label-position/)
*/
@property(nonatomic, readwrite) NSString *verticalAlign;
/**
A class name for styling by CSS.

**Defaults to** `highcharts-no-tooltip`.

**Try it**

* [Styled mode annotations](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/annotations)
*/
@property(nonatomic, readwrite) NSString *className;
/**
The border width in pixels for the annotation's label

**Defaults to** `1`.

**Try it**

* [Set labels graphic options](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/label-presentation/)
*/
@property(nonatomic, readwrite) NSNumber *borderWidth;
/**
Whether to hide labels that are outside the plot area.

**Defaults to** `false`.
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *clip;

-(NSDictionary *)getParams;

@end
