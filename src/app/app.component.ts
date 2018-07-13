import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  echartsInstance: any;
  public echartOption = {
    backgroundColor: '#2c343c',

    title: {
      text: '图表',
      subtext: '试试看呀',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc',
        align: 'left'
      }
    },
    tooltip: {
      trigger : 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: '图表测试',
        // 鼠标悬浮到图形元素上时出现的高亮样式
        // 在EChart4以前，高亮和普通样式的写法是直接在series中用normal和emphasis
        /*label: {
            // 普通样式。
            normal: {
                show: true,
                // 标签的文字。
                formatter: 'This is a normal label.'
            },
            // 高亮样式。
            emphasis: {
                show: true,
                // 高亮时标签的文字。
                formatter: 'This is a emphasis label.'
            }
        }*/
        emphasis: {
          itemStyle: {
            color: 'yellow'
          },
          label: {
            show: true,
            formatter: 'emphasis label.'
          }
        },
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 274, name: '联盟广告' },
          { value: 235, name: '视频广告' },
          { value: 400, name: '搜索引擎' }
        ].sort((a, b) => {
          return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
          position: 'inside',
          normal: {
            textStyle: {
              color: 'green'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'red'
            },
            smooth: 0.2,
            length: 60,
            length2: 80
          }
        },
        itemStyle: {
          normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function(idx) {
          return Math.random() * 200;
        }
      }
    ]
  };
  constructor() {}
  ngOnInit() {
  }
  public onChartInit(ec) {
    this.echartsInstance = ec;
    console.log('初始化图表数据' + ec);
  }
}
