//
//  OptionsProvider.h
//  HighFit
//
//  License: www.highcharts.com/license
//  Copyright © 2023 Highsoft AS. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <Highcharts/Highcharts.h>

@interface OptionsProvider : NSObject

+ (HIOptions*)provideOptionsForChartType:(NSDictionary*)options series:(NSArray*)series type:(NSString*)type;

@end
