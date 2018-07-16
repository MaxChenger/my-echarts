import { Component, OnInit } from '@angular/core';
import { NgxEchartsService } from 'ngx-echarts';
import * as echarts from 'echarts';
import chinaJson from './china.map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  echartsInstance: any;
  // public echartOption = {
  //   backgroundColor: '#2c343c',

  //   title: {
  //     text: '图表',
  //     subtext: '试试看呀',
  //     left: 'center',
  //     top: 20,
  //     textStyle: {
  //       color: '#ccc',
  //       align: 'left'
  //     }
  //   },
  //   tooltip: {
  //     trigger : 'item',
  //     formatter: '{a} <br/>{b} : {c} ({d}%)'
  //   },
  //   visualMap: {
  //     show: false,
  //     min: 80,
  //     max: 600,
  //     inRange: {
  //       colorLightness: [0, 1]
  //     }
  //   },
  //   series: [
  //     {
  //       name: '图表测试',
  //       // 鼠标悬浮到图形元素上时出现的高亮样式
  //       // 在EChart4以前，高亮和普通样式的写法是直接在series中用normal和emphasis
  //       /*label: {
  //           // 普通样式。
  //           normal: {
  //               show: true,
  //               // 标签的文字。
  //               formatter: 'This is a normal label.'
  //           },
  //           // 高亮样式。
  //           emphasis: {
  //               show: true,
  //               // 高亮时标签的文字。
  //               formatter: 'This is a emphasis label.'
  //           }
  //       }*/
  //       emphasis: {
  //         itemStyle: {
  //           color: 'yellow'
  //         },
  //         label: {
  //           show: true,
  //           formatter: 'emphasis label.'
  //         }
  //       },
  //       type: 'pie',
  //       radius: '55%',
  //       center: ['50%', '50%'],
  //       data: [
  //         { value: 335, name: '直接访问' },
  //         { value: 310, name: '邮件营销' },
  //         { value: 274, name: '联盟广告' },
  //         { value: 235, name: '视频广告' },
  //         { value: 400, name: '搜索引擎' }
  //       ].sort((a, b) => {
  //         return a.value - b.value;
  //       }),
  //       roseType: 'radius',
  //       label: {
  //         position: 'inside',
  //         normal: {
  //           textStyle: {
  //             color: 'green'
  //           }
  //         }
  //       },
  //       labelLine: {
  //         normal: {
  //           lineStyle: {
  //             color: 'red'
  //           },
  //           smooth: 0.2,
  //           length: 60,
  //           length2: 80
  //         }
  //       },
  //       itemStyle: {
  //         normal: {
  //           color: '#c23531',
  //           shadowBlur: 200,
  //           shadowColor: 'rgba(0, 0, 0, 0.5)'
  //         }
  //       },
  //       animationType: 'scale',
  //       animationEasing: 'elasticOut',
  //       animationDelay: function(idx) {
  //         return Math.random() * 200;
  //       }
  //     }
  //   ]
  // };
  public mydata = [
    { name: '北京', value: this.randomData() },
    { name: '天津', value: this.randomData() },
    { name: '上海', value: this.randomData() },
    { name: '重庆', value: this.randomData() },
    { name: '河北', value: this.randomData() },
    { name: '河南', value: this.randomData() },
    { name: '云南', value: this.randomData() },
    { name: '辽宁', value: this.randomData() },
    { name: '黑龙江', value: this.randomData() },
    { name: '湖南', value: this.randomData() },
    { name: '安徽', value: this.randomData() },
    { name: '山东', value: this.randomData() },
    { name: '新疆', value: this.randomData() },
    { name: '江苏', value: this.randomData() },
    { name: '浙江', value: this.randomData() },
    { name: '江西', value: this.randomData() },
    { name: '湖北', value: this.randomData() },
    { name: '广西', value: this.randomData() },
    { name: '甘肃', value: this.randomData() },
    { name: '山西', value: this.randomData() },
    { name: '内蒙古', value: this.randomData() },
    { name: '陕西', value: this.randomData() },
    { name: '吉林', value: this.randomData() },
    { name: '福建', value: this.randomData() },
    { name: '贵州', value: this.randomData() },
    { name: '广东', value: this.randomData() },
    { name: '青海', value: this.randomData() },
    { name: '西藏', value: this.randomData() },
    { name: '四川', value: this.randomData() },
    { name: '宁夏', value: this.randomData() },
    { name: '海南', value: this.randomData() },
    { name: '台湾', value: this.randomData() },
    { name: '香港', value: this.randomData() },
    { name: '澳门', value: this.randomData() },
  ];
  public echartOption = {
    backgroundColor: '#FFFFFF',
    title: {
      text: '全国地图',
      subtext: '纯属虚构',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    visualMap: {
      min: 0,
      max: 2500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'],           // 文本，默认为数值文本
      calculable : true
    },
    toolbox: {
      show: true,
      orient : 'vertical',
      x: 'right',
      y: 'center',
      feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          restore : {show: true},
          saveAsImage : {show: true}
      }
  },
    series: [
      {
        name: '随机数据',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: true,
          },
        },
        data: this.mydata
      }
    ],
  };
  public randomData() {
    return Math.round(Math.random() * 500);
  }

  constructor(
    private es: NgxEchartsService
  ) {}
  ngOnInit() {
    const echartsMap = this.es.echarts;
    echartsMap.registerMap('china', chinaJson);
  }
  public onChartInit(ec) {
    this.echartsInstance = ec;
    console.log('初始化图表数据' + ec);
  }
}
