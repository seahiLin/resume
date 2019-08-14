<template>
  <div class="technology-stack" ref="chart"></div>
</template>

<style>
  .technology-stack {
    width: 100%;
    height: 100%;
  }
</style>

<script>
let echarts = require('echarts');

export default {
  name: 'selfEvaluation',
  data () {
    return {
      myChart: {},
      option: {
        baseOption: {
          backgroundColor: 'rgba(204,204,204,0.7 )',
          title: {
            text: '个人素质',
            top: '5%',
            left: 'center',
            textStyle: {
              color: '#000',
              fontSize: 20,
            }
          },
          radar: [
            {
              center: ['50%', '55%'],
              radius: 250,
              startAngle: 90,
              name: {
                formatter: '{value}',
                textStyle: {
                  fontSize: 15,
                  color: '#000'
                }
              },
              nameGap: 15,
              splitNumber: 3,
              shape: 'polygon',
              axisLine: {
                lineStyle: {
                  color: '#fff',
                  width: 1,
                  type: 'solid',
                }
              },
              splitLine: {
                lineStyle: {
                  color: '#fff',
                  width: 2,
                }
              },
              splitArea: {
                show: true,
                areaStyle: {
                  color: 'rgba(250,250,250,0.3)'
                }
              },
              indicator: [
                {
                name: '责任心',
                max: 100,
                }, 
                {
                  name: '心理调节',
                  max: 100
                }, 
                {
                  name: '沟通能力',
                  max: 100
                }, 
                {
                  name: '实践经验',
                  max: 100
                }, 
                {
                  name: '学习能力',
                  max: 100
                }
              ]
            },
          ],
          series: [
            {
              name: '雷达图',
              type: 'radar',
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 1
                  },
                  opacity: 0.2
                },
                emphasis: {
                  lineStyle: {
                    width: 5
                  },
                  opacity: 1
                }
              },
              data: [
                {
                  name: 'mastery',
                  value: [75, 75, 65, 65, 80],
                  symbol: 'circle',
                  symbolSize: 5,
                  label: {
                    normal: {
                      show: true,
                      position: 'top',
                      distance: 5,
                      color: 'rgba(255,0,0,1)',
                      fontSize: 14,
                      formatter:function(params) {
                        return params.value;
                      }  
                    }  
                  },
                  itemStyle: {
                    normal: {
                      borderColor: 'rgba(255,0,0,1)',
                      borderWidth: 3,
                    }
                  },
                  lineStyle: {
                    normal: {
                      opacity: 0.5
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: 'rgba(255,0,0,0.6)'
                    }
                  }
                }
              ]
            }
          ]
        },
        media: [
          {
            query: {
              maxWidth: 340
            },
            option: {
              title: {
                textStyle: {
                  fontSize: 12
                }
              },
              radar: [
                {
                  center: ['50%', '45%'],
                  radius: 80,
                  name: {
                    textStyle: {
                      fontSize: 12
                    }
                  },
                  nameGap: 3
                }
              ],
              series: [
                {
                  itemStyle: {
                    emphasis: {
                      lineStyle: {
                        width: 2
                      }
                    }
                  },
                  data: [
                    {
                      name: 'mastery',
                      value: [75, 75, 65, 65, 80],
                      symbol: 'circle',
                      symbolSize: 2,
                      label: {
                        normal: {
                          show: true,
                          position: 'top',
                          distance: 2,
                          color: 'rgba(255,0,0,1)',
                          fontSize: 10,
                          formatter:function(params) {
                            return params.value;
                          }
                        }  
                      },
                      itemStyle: {
                        normal: {
                          borderColor: 'rgba(255,0,0,1)',
                          borderWidth: 1,
                        }
                      },
                      lineStyle: {
                        normal: {
                          opacity: 0.5
                        }
                      },
                      areaStyle: {
                        normal: {
                          color: 'rgba(255,0,0,0.6)'
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    }
  },
  mounted () {
    this.myChart = echarts.init(this.$refs.chart);
    this.myChart.setOption(this.option);
    window.addEventListener('resize', () => {
      this.myChart.resize();
    })
  }
}
</script>
