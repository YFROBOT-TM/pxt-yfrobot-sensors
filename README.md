# YFSENSORS
 This is a MakeCode graphics programming extension for YFROBOT's sensors(lego/black board) module.

Support Motorbit, digital tube display module, ultrasonic module, collision switch, cruise sensor, and rocker module. 

[Sensors(lego) To Buy](https://item.taobao.com/item.htm?id=636842099248)
[Sensors(Black board) To Buy](https://item.taobao.com/item.htm?id=36071919197)

支持 
Input Sensors：按键模块、触摸传感器、磁控开关、震动传感器、红外感应器、热释电传感器、碰撞检测开关、角度传感器、温湿度传感器、旋转编码器、超声波测距、巡线模块、温度传感器、声音传感器、电位器模块、环境光传感器、摇杆模块、土壤湿度检测、MQ气体传感器、灰度传感器、水分传感器、火焰传感器、压力传感器、单路巡线传感器、非接触式液位检测传感器、锁存带灯按键、点动带灯按键。

Output Sensors：食人鱼模块、有源蜂鸣器、继电器模块、振动模块、风扇模块、数码管显示模块、水泵。

Input Sensors：手势传感器、颜色传感器、陀螺仪传感器、血氧传感器（另外链接）。

## Basic usage

* Set the direction and speed of YFSENSORS motor

```blocks
 YFSENSORS.motorRun(Motors.ML, Dir.CW, 120)
 YFSENSORS.motorRun(Motors.MR, Dir.CCW, 120)
```

* Stop the YFSENSORS motor 

```blocks
YFSENSORS.motorStop(Motors.ML)
```

* Move forward

```blocks
YFSENSORS.forward(128)
```

* Move back

```blocks
YFSENSORS.back(128)
```

* Turn left

```blocks
YFSENSORS.turnLeft(128)
```

* Turn right

```blocks
YFSENSORS.turnRight(128)
```

* Read IR sensor value

```blocks
basic.showNumber(irButtonCode())
```


## License

MIT

Copyright (c) 2024, YFROBOT  


## Supported targets

* for PXT/microbit
  (The metadata above is needed for package search.)