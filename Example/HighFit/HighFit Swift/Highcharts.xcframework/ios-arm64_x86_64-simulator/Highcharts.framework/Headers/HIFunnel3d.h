/**
* (c) 2009-2021 Highsoft AS
*
* License: www.highcharts.com/license
* For commercial usage, a valid license is required. To purchase a license for Highcharts iOS, please see our website: https://shop.highsoft.com/
* In case of questions, please contact sales@highsoft.com
*/

#import "HISeries.h"
#import "HIColor.h"
#import "HIBorderRadiusOptionsObject.h"


/**
 A `funnel3d` series. If the `type` option is not specified, it is inherited from `chart.type`.
 
 Configuration options for the series are given in three levels:
 
 1. Options for all series in a chart are defined in the `plotOptions.series` object.
 
 2. Options for all `funnel3d` series are defined in `plotOptions.funnel3d`.
 
 3. Options for one single series are given in `the series instance array`.
 
 <pre>
 Highcharts.chart('container', {
    plotOptions: {
        series: {
            // general options for all series
        },
        funnel3d: {
            // shared options for all funnel3d series
        }
    },
    series: [{
        // specific options for this series instance
        type: 'funnel3d'
    }]
 });
 <pre>
 */
@interface HIFunnel3d: HISeries

/**
When using automatic point colors pulled from the global `colors` or series-specific `plotOptions.column.colors` collections, this option determines whether the chart should receive one color per series or one color per point. In styled mode, the `colors` or `series.colors` arrays are not supported, and instead this option gives the points individual color class names on the form `highcharts-color-{n}`.

**Defaults to** `True`.

**Try it**

* [False by default](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-colorbypoint-false/)
* [True](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-colorbypoint-true/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *colorByPoint;
/**
A reversed funnel has the widest area down. A reversed funnel with no neck width and neck height is a pyramid.
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *reversed;
/**
The height of the neck, the lower part of the funnel. A number defines pixel width, a percentage string defines a percentage of the plot area height.

**Defaults to** `25%`.

**Try it**

* [Funnel3d demo](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/funnel3d/)
*/
@property(nonatomic, readwrite) id /* NSNumber, NSString */ neckHeight;
/**
The height of the series. If it is a number it defines the pixel height, if it is a percentage string it is the percentage of the plot area height.

**Defaults to** `100%`.

**Try it**

* [Funnel3d demo](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/funnel3d/)
*/
@property(nonatomic, readwrite) id /* NSNumber, NSString */ height;
/**
The max width of the series compared to the width of the plot area, or the pixel width if it is a number.

**Defaults to** `90%`.

**Try it**

* [Funnel3d demo](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/funnel3d/)
*/
@property(nonatomic, readwrite) id /* NSNumber, NSString */ width;
/**
The width of the neck, the lower part of the funnel. A number defines pixel width, a percentage string defines a percentage of the plot area width.

**Defaults to** `30%`.

**Try it**

* [Funnel3d demo](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/funnel3d/)
*/
@property(nonatomic, readwrite) id /* NSNumber, NSString */ neckWidth;
/**
By deafult sides fill is set to a gradient through this option being set to `true`. Set to `false` to get solid color for the sides.

**Defaults to** `True`.
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *gradientForSides;
/**
3D columns only. The width of the colored edges.
*/
@property(nonatomic, readwrite) NSNumber *edgeWidth;
/**
Padding between each column or bar, in x axis units.

**Defaults to** `0.1`.

**Try it**

* [0.1 by default](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-pointpadding-default/)
* [0.25](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-pointpadding-025/)
* [0 for tightly packed columns](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-pointpadding-none/)
*/
@property(nonatomic, readwrite) NSNumber *pointPadding;
/**
The corner radius of the border surrounding each column or bar. A number signifies pixels. A percentage string, like for example `50%`, signifies a relative size. For columns this is relative to the column width, for pies it is relative to the radius and the inner radius.

**Defaults to** `3`.

**Try it**

* [Rounded columns](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-borderradius/)
* [Column and pie with rounded border](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-border-radius)
*/
@property(nonatomic, readwrite) HIBorderRadiusOptionsObject *borderRadius;
/**
The X axis range that each point is valid for. This determines the width of the column. On a categorized axis, the range will be 1 by default (one category unit). On linear and datetime axes, the range will be computed as the distance between the two closest data points. The default `null` means it is computed automatically, but this option can be used to override the automatic value. This option is set by default to 1 if data sorting is enabled.

**Try it**

* [Set the point range to one day on a data set with one week between the points](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-pointrange/)
*/
@property(nonatomic, readwrite) NSNumber *pointRange;
/**
The minimal height for a column or width for a bar. By default, 0 values are not shown. To visualize a 0 (or close to zero) point, set the minimal point length to a pixel value like 3\. In stacked column charts, minPointLength might not be respected for tightly packed values.

**Try it**

* [Zero base value](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-minpointlength/)
* [Positive and negative close to zero values](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-minpointlength-pos-and-neg/)
*/
@property(nonatomic, readwrite) NSNumber *minPointLength;
/**
The spacing between columns on the Z Axis in a 3D chart.

**Defaults to** `1`.
*/
@property(nonatomic, readwrite) NSNumber *groupZPadding;
/**
A series specific or series type specific color set to apply instead of the global `colors` when `colorByPoint` is true.
*/
@property(nonatomic, readwrite) NSArray<HIColor *> *colors;
/**
The color of the border surrounding each column or bar. In styled mode, the border stroke can be set with the `.highcharts-point` rule.

**Defaults to** `#ffffff`.

**Try it**

* [Dark gray border](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-bordercolor/)
*/
@property(nonatomic, readwrite) HIColor *borderColor;
/**
3D columns only. The color of the edges. Similar to `borderColor`, except it defaults to the same color as the column.
*/
@property(nonatomic, readwrite) HIColor *edgeColor;
/**
When `true`, the columns will center in the category, ignoring null or missing points. When `false`, space will be reserved for null or missing points.

**Try it**

* [Center in category](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/series-column/centerincategory/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *centerInCategory;
/**
The maximum allowed pixel width for a column, translated to the height of a bar in a bar chart. This prevents the columns from becoming too wide when there is a small number of points in the chart.

**Try it**

* [Limited to 50](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-maxpointwidth-20/)
*/
@property(nonatomic, readwrite) NSNumber *maxPointWidth;
/**
A pixel value specifying a fixed width for each column or bar point. When set to `undefined`, the width is calculated from the `pointPadding` and `groupPadding`. The width effects the dimension that is not based on the point value. For column series it is the hoizontal length and for bar series it is the vertical length.

**Try it**

* [20px wide columns regardless of chart width or the amount of data points](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-pointwidth-20/)
*/
@property(nonatomic, readwrite) NSNumber *pointWidth;
/**
Padding between each value groups, in x axis units.

**Defaults to** `0.2`.

**Try it**

* [0.2 by default](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-grouppadding-default/)
* [No group padding - all columns are evenly spaced](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-grouppadding-none/)
*/
@property(nonatomic, readwrite) NSNumber *groupPadding;
/**
Depth of the columns in a 3D column chart.

**Defaults to** `25`.
*/
@property(nonatomic, readwrite) NSNumber *depth;
/**
The width of the border surrounding each column or bar. Defaults to `1` when there is room for a border, but to `0` when the columns are so dense that a border would cover the next column. In styled mode, the stroke width can be set with the `.highcharts-point` rule.

**Defaults to** `undefined`.

**Try it**

* [2px black border](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-borderwidth/)
*/
@property(nonatomic, readwrite) NSNumber *borderWidth;
/**
Whether to group non-stacked columns or to let them render independent of each other. Non-grouped columns will be laid out individually and overlap each other.

**Defaults to** `true`.

**Try it**

* [Grouping disabled](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/column-grouping-false/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *grouping;

-(NSDictionary *)getParams;

@end
