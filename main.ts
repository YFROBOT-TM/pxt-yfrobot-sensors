/** 
 * @file YFSENSORS
 * @brief YFROBOT's sensors(lego) makecode library.
 * @n This is a MakeCode graphics programming extension for YFROBOT's sensors(lego) module.
 * 
 * @copyright    YFROBOT,2021
 * @copyright    MIT Lesser General Public License
 * 
 * @author [email](yfrobot@qq.com)
 * @date  2021-11-23
*/


enum enButton {
    //% blockId="Press" block="Press"
    Press = 0,
    //% blockId="Realse" block="Realse"
    Realse = 1
}	

enum YFIrProtocol {
    //% block="Keyestudio"
    Keyestudio = 0,
    //% block="NEC"
    NEC = 1,
}

enum YFIrButtonAction {
    //% block="pressed"
    Pressed = 0,
    //% block="released"
    Released = 1,
}

enum YFIrButton_Handle {
    // any button
    //% block="Any"
    Any = -1,

    //IR HANDLE
    //% block="↑"
    UP = 0x11,
    //% block="↓"
    DOWN = 0x91,
    //% block="←"
    LEFT = 0x81,
    //% block="→"
    RIGHT = 0xa1,
    //% block="M1"
    M1 = 0xe9,
    //% block="M2"
    M2 = 0x69,
    //% block="A"
    A = 0x21,
    //% block="B"
    B = 0x01
}

enum YFIrButton {
    // any button
    //% block="Any"
    Any = -1,

    //% block=" "
    Null_01 = -1,
    //% block=" "
    Null_02 = -1,

    // MINI IR 
    //% block="A"
    Mini_A = 0xa2,
    //% block="B"
    Mini_B = 0x62,
    //% block="C"
    Mini_C = 0xe2,
    //% block="D"
    Mini_D = 0x22,
    //% block="︿"
    Mini_UP = 0x02,
    //% block="E"
    Mini_E = 0xc2,
    //% block="＜"
    Mini_Left = 0xe0,
    //% block="۞"
    Mini_SET = 0xa8,
    //% block="＞"
    Mini_Right = 0x90,
    //% block="0"
    Number_0 = 0x68,
    //% block="﹀"
    Mini_Down = 0x98,
    //% block="F"
    Mini_F = 0xb0,
    //% block="1"
    Number_1 = 0x30,
    //% block="2"
    Number_2 = 0x18,
    //% block="3"
    Number_3 = 0x7a,
    //% block="4"
    Number_4 = 0x10,
    //% block="5"
    Number_5 = 0x38,
    //% block="6"
    Number_6 = 0x5a,
    //% block="7"
    Number_7 = 0x42,
    //% block="8"
    Number_8 = 0x4a,
    //% block="9"
    Number_9 = 0x52,
}
/************************* IR *************************/

enum YFADOutputModule {
    //% blockId="YFDOM_LED" block="LED"
    LED = 0x0,
    //% blockId="YFDOM_FAN" block="FAN"
    FAN = 0x2,
    //% blockId="YFDOM_VIBRATION_MOTOR" block="VIBRATION_MOTOR"
    VIBRATION_MOTOR = 0x4,
    //% blockId="YFDOM_PUMP" block="PUMP"
    PUMP = 0x5,
}

enum YFDigitalOutputModule {
    //% blockId="YFDOM_LED" block="LED"
    LED = 0x0,
    //% blockId="YFDOM_BUZZER" block="BUZZER"
    BUZZER = 0x1,
    //% blockId="YFDOM_FAN" block="FAN"
    FAN = 0x2,
    //% blockId="YFDOM_RELAY" block="RELAY"
    RELAY = 0x3,
    //% blockId="YFDOM_VIBRATION_MOTOR" block="VIBRATION_MOTOR"
    VIBRATION_MOTOR = 0x4,
    //% blockId="YFDOM_PUMP" block="PUMP"
    PUMP = 0x5,
}

/*************************  Output - OTP Fixed voice list  *************************/
enum YFOTPFixedVoiceList {
    //% blockId="YFOTPFVL_00" block="老师"
    OTPFVL_00 = 0x00,
    //% blockId="YFOTPFVL_01" block="爸爸"
    OTPFVL_01 = 0x01,
    //% blockId="YFOTPFVL_02" block="妈妈"
    OTPFVL_02 = 0x02,
    //% blockId="YFOTPFVL_03" block="爷爷"
    OTPFVL_03 = 0x03,
    //% blockId="YFOTPFVL_04" block="奶奶"
    OTPFVL_04 = 0x04,
    //% blockId="YFOTPFVL_05" block="姥姥"
    OTPFVL_05 = 0x05,
    //% blockId="YFOTPFVL_06" block="姥爷"
    OTPFVL_06 = 0x06,
    //% blockId="YFOTPFVL_07" block="哥哥"
    OTPFVL_07 = 0x07,
    //% blockId="YFOTPFVL_08" block="姐姐"
    OTPFVL_08 = 0x08,
    //% blockId="YFOTPFVL_09" block="叔叔"
    OTPFVL_09 = 0x09,
    //% blockId="YFOTPFVL_0A" block="阿姨"
    OTPFVL_0A = 0x0A,
    //% blockId="YFOTPFVL_0B" block="上午"
    OTPFVL_0B = 0x0B,
    //% blockId="YFOTPFVL_0C" block="下午"
    OTPFVL_0C = 0x0C,
    //% blockId="YFOTPFVL_0D" block="晚上"
    OTPFVL_0D = 0x0D,
    //% blockId="YFOTPFVL_0E" block="前方"
    OTPFVL_0E = 0x0E,
    //% blockId="YFOTPFVL_0F" block="厘米"
    OTPFVL_0F = 0x0F,
    //% blockId="YFOTPFVL_10" block="新年快乐"
    OTPFVL_10 = 0x10,
    //% blockId="YFOTPFVL_11" block="身体健康"
    OTPFVL_11 = 0x11,
    //% blockId="YFOTPFVL_12" block="工作顺利"
    OTPFVL_12 = 0x12,
    //% blockId="YFOTPFVL_13" block="学习进步"
    OTPFVL_13 = 0x13,
    //% blockId="YFOTPFVL_14" block="您好"
    OTPFVL_14 = 0x14,
    //% blockId="YFOTPFVL_15" block="谢谢"
    OTPFVL_15 = 0x15,
    //% blockId="YFOTPFVL_16" block="的"
    OTPFVL_16 = 0x16,
    //% blockId="YFOTPFVL_17" block="祝"
    OTPFVL_17 = 0x17,
    //% blockId="YFOTPFVL_18" block="慢走"
    OTPFVL_18 = 0x18,
    //% blockId="YFOTPFVL_19" block="欢迎光临"
    OTPFVL_19 = 0x19,
    //% blockId="YFOTPFVL_1A" block="亲爱的""
    OTPFVL_1A = 0x1A,
    //% blockId="YFOTPFVL_1B" block="同学们"
    OTPFVL_1B = 0x1B,
    //% blockId="YFOTPFVL_1C" block="工作辛苦了"
    OTPFVL_1C = 0x1C,
    //% blockId="YFOTPFVL_1D" block="点"
    OTPFVL_1D = 0x1D,
    //% blockId="YFOTPFVL_1E" block="打开"
    OTPFVL_1E = 0x1E,
    //% blockId="YFOTPFVL_1F" block="关闭"
    OTPFVL_1F = 0x1F,
    //% blockId="YFOTPFVL_20" block="千"
    OTPFVL_20 = 0x20,
    //% blockId="YFOTPFVL_21" block="百"
    OTPFVL_21 = 0x21,
    //% blockId="YFOTPFVL_22" block="十/时"
    OTPFVL_22 = 0x22,
    //% blockId="YFOTPFVL_23" block="1"
    OTPFVL_23 = 0x23,
    //% blockId="YFOTPFVL_24" block="2"
    OTPFVL_24 = 0x24,
    //% blockId="YFOTPFVL_25" block="3"
    OTPFVL_25 = 0x25,
    //% blockId="YFOTPFVL_26" block="4"
    OTPFVL_26 = 0x26,
    //% blockId="YFOTPFVL_27" block="5"
    OTPFVL_27 = 0x27,
    //% blockId="YFOTPFVL_28" block="6"
    OTPFVL_28 = 0x28,
    //% blockId="YFOTPFVL_29" block="7"
    OTPFVL_29 = 0x29,
    //% blockId="YFOTPFVL_2A" block="8"
    OTPFVL_2A = 0x2A,
    //% blockId="YFOTPFVL_2B" block="9"
    OTPFVL_2B = 0x2B,
    //% blockId="YFOTPFVL_2C" block="0"
    OTPFVL_2C = 0x2C,
    //% blockId="YFOTPFVL_2D" block="当前"
    OTPFVL_2D = 0x2D,
    //% blockId="YFOTPFVL_2E" block="转"
    OTPFVL_2E = 0x2E,
    //% blockId="YFOTPFVL_2F" block="左"
    OTPFVL_2F = 0x2F,
    //% blockId="YFOTPFVL_30" block="右"
    OTPFVL_30 = 0x30,
    //% blockId="YFOTPFVL_31" block="请"
    OTPFVL_31 = 0x31,
    //% blockId="YFOTPFVL_32" block="已"
    OTPFVL_32 = 0x32,
    //% blockId="YFOTPFVL_33" block="现在"
    OTPFVL_33 = 0x33,
    //% blockId="YFOTPFVL_34" block="是"
    OTPFVL_34 = 0x34,
    //% blockId="YFOTPFVL_35" block="红灯"
    OTPFVL_35 = 0x35,
    //% blockId="YFOTPFVL_36" block="绿灯"
    OTPFVL_36 = 0x36,
    //% blockId="YFOTPFVL_37" block="黄灯"
    OTPFVL_37 = 0x37,
    //% blockId="YFOTPFVL_38" block="温度"
    OTPFVL_38 = 0x38,
    //% blockId="YFOTPFVL_39" block="湿度"
    OTPFVL_39 = 0x39,
    //% blockId="YFOTPFVL_3A" block="欢迎常来"
    OTPFVL_3A = 0x3A,
    //% blockId="YFOTPFVL_3B" block="还有"
    OTPFVL_3B = 0x3B,
    //% blockId="YFOTPFVL_3C" block="秒"
    OTPFVL_3C = 0x3C,
    //% blockId="YFOTPFVL_3D" block="分"
    OTPFVL_3D = 0x3D,
    //% blockId="YFOTPFVL_3E" block="变"
    OTPFVL_3E = 0x3E,
    //% blockId="YFOTPFVL_3F" block="等"
    OTPFVL_3F = 0x3F,
    //% blockId="YFOTPFVL_40" block="下一次"
    OTPFVL_40 = 0x40,
    //% blockId="YFOTPFVL_41" block="功能"
    OTPFVL_41 = 0x41,
    //% blockId="YFOTPFVL_42" block="障碍物"
    OTPFVL_42 = 0x42,
    //% blockId="YFOTPFVL_43" block="世界那么大，我想去看看"
    OTPFVL_43 = 0x43,
}

enum YFOTPFixedVoiceList2 {
    //% blockId="YFOTPFVL_44" block="今天"
    OTPFVL_44 = 0x44,
    //% blockId="YFOTPFVL_45" block="年"
    OTPFVL_45 = 0x45,
    //% blockId="YFOTPFVL_46" block="月"
    OTPFVL_46 = 0x46,
    //% blockId="YFOTPFVL_47" block="日"
    OTPFVL_47 = 0x47,
    //% blockId="YFOTPFVL_48" block="星期"
    OTPFVL_48 = 0x48,
    //% blockId="YFOTPFVL_49" block="农历"
    OTPFVL_49 = 0x49,
    //% blockId="YFOTPFVL_4A" block="现在时刻"
    OTPFVL_4A = 0x4A,
    //% blockId="YFOTPFVL_4B" block="北京时间"
    OTPFVL_4B = 0x4B,
    //% blockId="YFOTPFVL_4C" block="整"
    OTPFVL_4C = 0x4C,
    //% blockId="YFOTPFVL_4D" block="度"
    OTPFVL_4D = 0x4D,
    //% blockId="YFOTPFVL_4E" block="百分之"
    OTPFVL_4E = 0x4E,
    //% blockId="YFOTPFVL_4F" block="距离"
    OTPFVL_4F = 0x4F,
    //% blockId="YFOTPFVL_50" block="厘米"
    OTPFVL_50 = 0x50,
    //% blockId="YFOTPFVL_51" block="明天"
    OTPFVL_51 = 0x51,
    //% blockId="YFOTPFVL_52" block="天气"
    OTPFVL_52 = 0x52,
    //% blockId="YFOTPFVL_53" block="白天"
    OTPFVL_53 = 0x53,
    //% blockId="YFOTPFVL_54" block="夜间"
    OTPFVL_54 = 0x54,
    //% blockId="YFOTPFVL_55" block="晴"
    OTPFVL_55 = 0x55,
    //% blockId="YFOTPFVL_56" block="多云"
    OTPFVL_56 = 0x56,
    //% blockId="YFOTPFVL_57" block="阴"
    OTPFVL_57 = 0x57,
    //% blockId="YFOTPFVL_58" block="雨"
    OTPFVL_58 = 0x58,
    //% blockId="YFOTPFVL_59" block="雷阵"
    OTPFVL_59 = 0x59,
    //% blockId="YFOTPFVL_5A" block="小"
    OTPFVL_5A = 0x5A,
    //% blockId="YFOTPFVL_5B" block="中"
    OTPFVL_5B = 0x5B,
    //% blockId="YFOTPFVL_5C" block="大"
    OTPFVL_5C = 0x5C,
    //% blockId="YFOTPFVL_5D" block="夹"
    OTPFVL_5D = 0x5D,
    //% blockId="YFOTPFVL_5E" block="雪""
    OTPFVL_5E = 0x5E,
    //% blockId="YFOTPFVL_5F" block="雾"
    OTPFVL_5F = 0x5F,
    //% blockId="YFOTPFVL_60" block="霾"
    OTPFVL_60 = 0x60,
    //% blockId="YFOTPFVL_61" block="风"
    OTPFVL_61 = 0x61,
    //% blockId="YFOTPFVL_62" block="东"
    OTPFVL_62 = 0x62,
    //% blockId="YFOTPFVL_63" block="南"
    OTPFVL_63 = 0x63,
    //% blockId="YFOTPFVL_64" block="西"
    OTPFVL_64 = 0x64,
    //% blockId="YFOTPFVL_65" block="北"
    OTPFVL_65 = 0x65,
    //% blockId="YFOTPFVL_66" block="到"
    OTPFVL_66 = 0x66,
    //% blockId="YFOTPFVL_67" block="级"
    OTPFVL_67 = 0x67,
    //% blockId="YFOTPFVL_68" block="偏"
    OTPFVL_68 = 0x68,
    //% blockId="YFOTPFVL_69" block="方向"
    OTPFVL_69 = 0x69,
    //% blockId="YFOTPFVL_6A" block="空气质量"
    OTPFVL_6A = 0x6A,
    //% blockId="YFOTPFVL_6B" block="优"
    OTPFVL_6B = 0x6B,
    //% blockId="YFOTPFVL_6C" block="良"
    OTPFVL_6C = 0x6C,
    //% blockId="YFOTPFVL_6D" block="轻度污染"
    OTPFVL_6D = 0x6D,
    //% blockId="YFOTPFVL_6E" block="中度污染"
    OTPFVL_6E = 0x6E,
    //% blockId="YFOTPFVL_6F" block="重度污染"
    OTPFVL_6F = 0x6F,
    //% blockId="YFOTPFVL_70" block="上"
    OTPFVL_70 = 0x70,
    //% blockId="YFOTPFVL_71" block="下"
    OTPFVL_71 = 0x71,
    //% blockId="YFOTPFVL_72" block="接近"
    OTPFVL_72 = 0x72,
    //% blockId="YFOTPFVL_73" block="远离"
    OTPFVL_73 = 0x73,
    //% blockId="YFOTPFVL_74" block="灯"
    OTPFVL_74 = 0x74,
    //% blockId="YFOTPFVL_75" block="风扇"
    OTPFVL_75 = 0x75,
    //% blockId="YFOTPFVL_76" block="红色"
    OTPFVL_76 = 0x76,
    //% blockId="YFOTPFVL_77" block="绿色"
    OTPFVL_77 = 0x77,
    //% blockId="YFOTPFVL_78" block="蓝色"
    OTPFVL_78 = 0x78,
    //% blockId="YFOTPFVL_79" block="黄色"
    OTPFVL_79 = 0x79,
    //% blockId="YFOTPFVL_7A" block="白色"
    OTPFVL_7A = 0x7A,
    //% blockId="YFOTPFVL_7B" block="叮音效"
    OTPFVL_7B = 0x7B,
    //% blockId="YFOTPFVL_7C" block="滴滴滴"
    OTPFVL_7C = 0x7C,
    //% blockId="YFOTPFVL_7D" block="叮叮音效"
    OTPFVL_7D = 0x7D,
    //% blockId="YFOTPFVL_7E" block="叮叮音效"
    OTPFVL_7E = 0x7E
}

enum YFOTPFixedVoiceFun {
    //% blockId="YFOTPFVF_VolumeLevel0" block="设置音量0"
    VolumeLevel0 = 0xE0,
    //% blockId="YFOTPFVF_VolumeLevel1" block="设置音量1"
    VolumeLevel1 = 0xE1,
    //% blockId="YFOTPFVF_VolumeLevel2" block="设置音量2"
    VolumeLevel2 = 0xE2,
    //% blockId="YFOTPFVF_VolumeLevel3" block="设置音量3"
    VolumeLevel3 = 0xE3,
    //% blockId="YFOTPFVF_VolumeLevel4" block="设置音量4"
    VolumeLevel4 = 0xE4,
    //% blockId="YFOTPFVF_VolumeLevel5" block="设置音量5"
    VolumeLevel5 = 0xE5,
    //% blockId="YFOTPFVF_VolumeLevel6" block="设置音量6"
    VolumeLevel6 = 0xE6,
    //% blockId="YFOTPFVF_VolumeLevel7" block="设置音量7"
    VolumeLevel7 = 0xE7,
    //% blockId="YFOTPFVF_LOOP" block="循环播放"
    Loop = 0xF2,
    //% blockId="YFOTPFVF_STOP" block="停止播放"
    Stop = 0xFE
}

enum YFOTPFixedVoiceFun2 {
    //% blockId="YFOTPFVF_HEADCODE" block="发送连码头码"
    HeadCode = 0xF1,
    //% blockId="YFOTPFVF_TAILCODE" block="发送连码尾码"
    TailCode = 0xF3
}

enum YFOTPFixedVoiceFunMute {
    //% blockId="YFOTPFVF_MUTECODE" block="静音(后接数字，单位10ms)"
    MuteCode = 0xF4
}

/*************************  Output - MP3 audio playback module function  *************************/
enum YFAudioPlaybackFunWithNum {
    //% blockId="YFAPF_SelectPlay" block="Select Play"
    SelectPlay = 0x0B,
    //% blockId="YFAPF_SetVolume" block="Set Volume"
    SetVolume = 0x0C,
    //% blockId="YFAPF_SetEQ" block="Set EQ Mode"
    SetEQ = 0x0D,
    //% blockId="YFAPF_SetPlayMode" block="Set Play Mode"
    SetPlayMode = 0x0E,
    //% blockId="YFAPF_SetInsertTrack" block="Set the insert track"
    SetInsertTrack = 0x10,
}

enum YFAudioPlaybackFun {
    //% blockId="YFAPF_Play" block="Play"
    Play = 0x11,
    //% blockId="YFAPF_Pause" block="Pause"
    Pause = 0x12,
    //% blockId="YFAPF_Stop" block="Stop"
    Stop = 0x13,
    //% blockId="YFAPF_PreviousTrack" block="Previous track"
    PreviousTrack = 0x14,
    //% blockId="YFAPF_NextTrack" block="Next track"
    NextTrack = 0x15,
    //% blockId="YFAPF_PreviousContents" block="Previous contents"
    PreviousContents = 0x16,
    //% blockId="YFAPF_NextContents" block="Next contents"
    NextContents = 0x17,
    //% blockId="YFAPF_RemoveNumber" block="Remove Number"
    RemoveNumber = 0x0A,
    //% blockId="YFAPF_StopInsertTrack" block="Stop Insert Track"
    StopInsertTrack = 0x1C,
}

enum YFMVModule {
    //% blockId="YFMVM_MP3_AUDIO" block="MP3 Audio"
    MP3_AUDIO,
    //% blockId="YFMVM_VOICE_BROADCAST" block="Voice Broadcast"
    VOICE_BROADCAST
}

/*************************  Output - Voice Recorder Module *************************/
enum YFVRMFunction {
    //% blockId="YFVRM_PLAY_ONCE" block="Play Once"
    PLAY_ONCE,
    //% blockId="YFVRM_PLAY_LOOP" block="Play loop(Stop with power off)"
    PLAY_LOOP,
    //% blockId="YFVRM_SPEAKER_ENABLE" block="Speaker Enable"
    SPEAKER_ENABLE,
    //% blockId="YFVRM_SPEAKER_DISABLE" block="Speaker Disable"
    SPEAKER_DISABLE
}

/*************************  Output - Traffic Light LED Mode *************************/
enum YFTrafficLightLED {
    //% blockId="YFTLL_AllTurnOFF" block="ALL turn off"
    AllTurnOFF = 0x00,
    //% blockId="YFTLL_RedLED" block="Light red led"
    RedLED = 0x01,
    //% blockId="YFTLL_YellowLED" block="Light yellow led"
    YellowLED = 0x02,
    //% blockId="YFTLL_GreenLED" block="Light green led"
    GreenLED = 0x03,
}

enum YFAnalogInputModule {
    //% blockId="YFAIM_LIGHT" block="LIGHT"
    LIGHT = 0x0,
    //% blockId="YFAIM_SOUND" block="SOUND"
    SOUND = 0x1,
    //% blockId="YFAIM_POTENTIOMETER" block="POTENTIOMETER"
    POTENTIOMETER = 0x2,
    //% blockId="YFAIM_SOIL_HUMIDITY" block="SOIL_HUMIDITY"
    SOIL_HUMIDITY = 0x3,
    //% blockId="YFAIM_ROCKER_X" block="ROCKER_X"
    ROCKER_X = 0x4,
    //% blockId="YFAIM_ROCKER_Y" block="ROCKER_Y"
    ROCKER_Y = 0x5,
    //% blockId="YFAIM_MQ_GAS" block="MQ_GAS"
    MQ_GAS = 0x6,
    //% blockId="YFAIM_GRAYSCALE" block="GRAYSCALE"  灰度
    GRAYSCALE = 0x7,
    //% blockId="YFAIM_WATER" block="WATER"
    WATER = 0x8,
    //% blockId="YFAIM_FLAME" block="FLAME"
    FLAME = 0x9,
    //% blockId="YFAIM_PRESSURE" block="PRESSURE"
    PRESSURE = 0xA,
}

enum YFDigitalInputModule {
    //% blockId="YFDIM_MAGNETIC_SENSOR" block="MAGNETIC_SENSOR"
    MAGNETIC_SENSOR = 0x0,
    //% blockId="YFDIM_TILT_SENSOR" block="TILT_SENSOR"
    TILT_SENSOR = 0x1,
    //% blockId="YFDIM_INFRARED_PROXIMITY_SENSOR" block="INFRARED_PROXIMITY_SENSOR"
    INFRARED_PROXIMITY_SENSOR = 0x2,
    //% blockId="YFDIM_VIBRATION_SENSOR" block="VIBRATION_SENSOR"
    VIBRATION_SENSOR  = 0x3,
    //% blockId="YFDIM_PYROELECTRIC_SENSOR" block="PYROELECTRIC_SENSOR"
    PYROELECTRIC_SENSOR = 0x4,
    //% blockId="YFDIM_TOUCH_SENSOR" block="TOUCH_SENSOR"
    TOUCH_SENSOR = 0x5,
    //% blockId="YFDIM_BUTTON" block="BUTTON"
    BUTTON = 0x6,
    //% blockId="YFDIM_COLLISION_SWITCH" block="COLLISION_SWITCH"
    COLLISION_SWITCH = 0x7,
    //% blockId="YFDIM_PATROL_LEFT" block="PATROL_LEFT"
    PATROL_LEFT = 0x08,
    //% blockId="YFDIM_PATROL_RIGHT" block="PATROL_RIGHT"
    PATROL_RIGHT = 0x09,
    //% blockId="YFDIM_PATROL_SINGLE" block="PATROL_SINGLE"
    PATROL_SINGLE = 0x0A,
    //% blockId="YFDIM_LIQUID_LEVEL" block="LIQUID_LEVEL"
    LIQUID_LEVEL = 0x0B,
}

enum YFDigitalInputModuleE {
    //% blockId="YFDIM_BUTTON" block="BUTTON"
    BUTTON = 0x0,
    //% blockId="YFDIM_COLLISION_SWITCH" block="COLLISION_SWITCH"
    COLLISION_SWITCH = 0x1,
}

/** An action on a touch button */
enum YFDigitalInputEvent {
    //% block=touched
    Clicked = DAL.MICROBIT_BUTTON_EVT_CLICK,  // MICROBIT_BUTTON_EVT_CLICK
}

enum YFSwitchState {
    //% blockId="YF_OFF" block="OFF"
    OFF = 0x0,
    //% blockId="YF_ON" block="ON"
    ON = 0x1
}

enum YFMotorsPin {
    //% blockId="M1Motor" block="M1"
    M1 = 0,
    //% blockId="M2Motor" block="M2"
    M2 = 1
}

enum YFMotors {
    //% blockId="M1Motor" block="M1"
    M1 = 0,
    //% blockId="M2Motor" block="M2"
    M2 = 1,
    //% blockId="AllMotors" block="All"
    MAll = 2
}

enum YFDir {
    //% blockId="CW" block="Forward"
    CW = 0x0,
    //% blockId="CCW" block="Reverse"
    CCW = 0x1
}

enum YFPingUnit {
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches,
    //% block="μs"
    MicroSeconds
}

enum YFDHT11_state {
    //% block="temperature(℃)" enumval=0
    DHT11_temperature_C,
    //% block="humidity(0~100%)" enumval=1
    DHT11_humidity,
}

//% color="#45b787" weight=10 icon="\uf12e"
namespace YFSENSORS {
    
    ///////////////////// IR ///////////////////////
    let irState: IrState

    const MICROBIT_MAKERBIT_IR_NEC = 777
    const MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID = 789
    const MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID = 790
    const IR_REPEAT = 256
    const IR_INCOMPLETE = 257

    interface IrState {
        protocol: YFIrProtocol;
        command: number;
        hasNewCommand: boolean;
        bitsReceived: uint8;
        commandBits: uint8;
    }
    
    ///////////////////// Output - MP3 audio playback module ///////////////////////
    let AudioPlaybackPin_data = DigitalPin.P2;
    
    ///////////////////// Output - MOTOR DRIVE PIN ///////////////////////
    let YFSENSORSMotor1D = DigitalPin.P13
    let YFSENSORSMotor1A = AnalogPin.P14
    let YFSENSORSMotor2D = DigitalPin.P15
    let YFSENSORSMotor2A = AnalogPin.P16

    /////////////////////// DigitalTubes ///////////////////////
    let PINDIO = DigitalPin.P1;
    let PINCLK = DigitalPin.P2;

    let CMD_SYSTEM_CONFIG = 0x48   
    let DIG1_ADDRESS = 0x68
    let DIG2_ADDRESS = 0x6A
    let DIG3_ADDRESS = 0x6C
    let DIG4_ADDRESS = 0x6E
    let DatAddressArray = [DIG1_ADDRESS, DIG2_ADDRESS, DIG3_ADDRESS, DIG4_ADDRESS];

    let _SEG = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71];
    let _intensity = 8
    let dbuf = [0, 0, 0, 0]
    /////////////////////// DigitalTubes ///////////////////////

    ///////////////////// Output ///////////////////////
    /**
    * toggle  Turn the Digital Output Module ON or OFF.
    * @param adom module. eg: YFADOutputModule.LED
    * @param adomPin pin. eg: AnalogPin.P1
    * @param state switch state.
    * @param percentage brightness of LED, Motor vibration strength, fan rotation speed.
    */
    //% group="Output"
    //% blockId=YFSENSORS_readInfraredSensor weight=100 blockGap=15
    //% block="%adom| %adomPin toggle to %state || percentage %percentage \\%"
    //% adom.fieldEditor="gridpicker" adom.fieldOptions.columns=2
    //% adomPin.fieldEditor="gridpicker" adomPin.fieldOptions.columns=4
    //% percentage.min=0 percentage.max=100
    //% state.shadow="toggleOnOff"
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=inline
    export function aDOutputModule(adom: YFADOutputModule, adomPin: AnalogPin, state: boolean, percentage: number = 100): void {
        let adomM = adom;  // no work
        if (state) {
            pins.analogSetPeriod(adomPin, 100)
            pins.analogWritePin(adomPin, Math.map(percentage, 0, 100, 0, 1023))
        } else {
            pins.analogWritePin(adomPin, 0)
            percentage = 0
        }
    }

    /**
     * ON or OFF.
     * @param num on or off eg: YFSwitchState.ON
     */
    //% advanced=true
    //% group="Output"
    //% blockId=YFSENSORS_domOnOff weight=11 blockGap=15
    //% block="%num"
    //% num.fieldEditor="gridpicker" num.fieldOptions.columns=2
    export function domOnOff(num: YFSwitchState): number {
        return num;
    }

    /**
     * Turn the Digital Output Module ON or OFF.
     * @param domPin pin. eg: DigitalPin.P2
     * @param dom pin. eg: YFDigitalOutputModule.LED
     * @param sws switch state.
     */
    //% group="Output"
    //% blockId=YFSENSORS_digitalOutputModule weight=98 blockGap=15
    //% block="%dom| at %domPin| %sws=YFSENSORS_domOnOff"
    //% domPin.fieldEditor="gridpicker" domPin.fieldOptions.columns=4
    //% dom.fieldEditor="gridpicker" dom.fieldOptions.columns=2
    // sws.fieldEditor="gridpicker" sws.fieldOptions.columns=2
    export function digitalOutputModule(dom: YFDigitalOutputModule, domPin: DigitalPin, sws: number): void {
        let domM = dom;  // no work
        pins.digitalWritePin(domPin, sws);
    }


    ///////////////////// Output - OTP Fixed voice broadcast module ///////////////////////
    /**
     * Returns the serial number of OTP fixed voice list.
     * @param num serial number. eg: YFOTPFixedVoiceList.OTPFVL_00
     */
    //% advanced=true
    //% group="Output"
    //% blockId=YFSENSORS_OTPFixedVoiceListNum weight=10 blockGap=15
    //% block="%num| "
    //% num.fieldEditor="gridpicker" num.fieldOptions.columns=10
    export function OTPFixedVoiceListNum(num: YFOTPFixedVoiceList): number {
        return num;
    }

    /**
     * Returns the serial number of OTP fixed voice list.
     * @param num serial number. eg: YFOTPFixedVoiceList2.OTPFVL_44
     */
    //% group="Output"
    //% blockId=YFSENSORS_OTPFixedVoiceListNum2 weight=94 blockGap=15
    //% block="%num"
    //% num.fieldEditor="gridpicker" num.fieldOptions.columns=10
    export function OTPFixedVoiceListNum2(num: YFOTPFixedVoiceList2): number {
        return num;
    }

    /**
      * Get numeric value of colour
      * @param color Standard RGB Led Colours eg: #ff0000
      */
    //% advanced=true
    //% group="Output"
    //% blockId="YFSENSORS_bb_colours" weight=0 blockGap=15
    //% block=%color
    //% shim=TD_ID colorSecondary="#e7660b"
    //% color.fieldEditor="colornumber"
    //% color.fieldOptions.decompileLiterals=true
    //% color.defl='#ff0000'
    //% color.fieldOptions.colours='["#FF0000","#659900","#18E600","#80FF00","#00FF00","#FF8000","#D82600","#B24C00","#00FFC0","#00FF80","#FFC000","#FF0080","#FF00FF","#B09EFF","#00FFFF","#FFFF00","#8000FF","#0080FF","#0000FF","#FFFFFF","#FF8080","#80FF80","#40C0FF","#999999","#000000"]'
    //% color.fieldOptions.columns=5
    //% color.fieldOptions.className='rgbColorPicker'
    export function BBColours(color: number): number {
        return color;
    }

    /**
     * Fixed voice broadcast module send data with no start bit.
     * param vbmPin pin.
     * param serial_number voice serial number.
     */
     function voiceBroadcastModuleSendData(vbmPin: DigitalPin, serial_number: number): void {
        for (let index = 0; index < 8; index++) {
            pins.digitalWritePin(vbmPin, 1); 
            if(serial_number & 1){
                control.waitMicros(2400);
                pins.digitalWritePin(vbmPin, 0);
                control.waitMicros(800);
            } else {
                control.waitMicros(800);
                pins.digitalWritePin(vbmPin, 0);
                control.waitMicros(2400);
            } 
            serial_number >>= 1;
        }
        pins.digitalWritePin(vbmPin, 1); 
    }

    /**
     * Fixed voice broadcast module send data with start bit.
     * param vbmPin pin.
     * param serial_number voice serial number.
     */
    function voiceBroadcastModuleSendDataWithS(vbmPin: DigitalPin, serial_number: number): void {
        pins.digitalWritePin(vbmPin, 1); 
        basic.pause(3);
        pins.digitalWritePin(vbmPin, 0); 
        basic.pause(3);
        voiceBroadcastModuleSendData(vbmPin, serial_number);
    }

    /**
     * Fixed voice broadcast module play.
     * @param vbmPin pin. eg: DigitalPin.P2
     * @param serial_number voice serial number.
     * @param delayt delay time. eg: 50
     */
    //% group="Output"
    //% blockId=YFSENSORS_voiceBroadcastModule weight=95 blockGap=15
    //% block="voice broadcast %vbmPin| play %serial_number=YFSENSORS_OTPFixedVoiceListNum || delay %delayt| ms"
    //% vbmPin.fieldEditor="gridpicker" vbmPin.fieldOptions.columns=4
    //% inlineInputMode=inline
    export function voiceBroadcastModule(vbmPin: DigitalPin, serial_number: number, delayt: number = 50): void {

        voiceBroadcastModuleSendDataWithS(vbmPin, serial_number);
        if (delayt > 50 ) {
            basic.pause(delayt);
        } else 
            basic.pause(50);
    }
    
    /**
     * Fixed voice broadcast module function : set volume level(0~7) / Stop play / loop play.
     * @param vbmfPin pin. eg: DigitalPin.P2
     * @param serial_num voice serial number of function. eg: YFOTPFixedVoiceFun.VolumeLevel4
     */
    //% group="Output"
    //% blockId=YFSENSORS_voiceBroadcastModuleFun weight=93 blockGap=15
    //% block="voice broadcast %vbmfPin| %serial_num"
    //% vbmfPin.fieldEditor="gridpicker" vbmfPin.fieldOptions.columns=4
    //% serial_num.fieldEditor="gridpicker" serial_num.fieldOptions.columns=4
    //% inlineInputMode=inline
    export function voiceBroadcastModuleFun(vbmfPin: DigitalPin, serial_num: YFOTPFixedVoiceFun): void {
        let snumber = serial_num;
        voiceBroadcastModuleSendDataWithS(vbmfPin, snumber);
    }

    /**
     * Fixed voice broadcast module function : Continuous Play.
     * @param vbmPin pin. eg: DigitalPin.P2
     * @param serial_number voice serial number list array.
     */
    //% group="Output"
    //% blockId=YFSENSORS_voiceBroadcastModuleFunContPlay weight=92 blockGap=15
    //% block="voice broadcast %vbmPin| continuous play %serial_number"
    //% vbmPin.fieldEditor="gridpicker" vbmPin.fieldOptions.columns=4
    //% inlineInputMode=inline
    export function voiceBroadcastModuleFunContPlay(vbmPin: DigitalPin, serial_number: number[]): void {
        let checksum = 0;
        voiceBroadcastModuleSendDataWithS(vbmPin, YFOTPFixedVoiceFun2.HeadCode); // 头码
        checksum += YFOTPFixedVoiceFun2.HeadCode;
        for (let index = 0; index < serial_number.length; index++) {
            voiceBroadcastModuleSendData(vbmPin, serial_number[index]); // 语音列表码
            checksum += serial_number[index];
        }
        voiceBroadcastModuleSendData(vbmPin, YFOTPFixedVoiceFun2.TailCode); // 尾码
        checksum += YFOTPFixedVoiceFun2.TailCode;
        voiceBroadcastModuleSendData(vbmPin, (checksum && 0xFF)); // 校验和
    }

    /**
     * Returns the mute code.
     * @param mute mute code.
     */
    //% group="Output"
    //% blockId=YFSENSORS_OTPFixedVoiceMute weight=91 blockGap=15
    //% block="%mute"
    //% num.fieldEditor="gridpicker" num.fieldOptions.columns=10
    export function OTPFixedVoiceMute(mute: YFOTPFixedVoiceFunMute): number {
        return mute;
    }

    ///////////////////// Output - MP3 audio playback module ///////////////////////
    /**
     * Connects the MP3 audio playback module to the specified pin.
     * @param pin_data data pin. eg: DigitalPin.P2
     */
    //% group="Output"
    //% blockId="YFSENSORS_audioPlaybackModule_connectPin" weight=90 blockGap=15
    //% block="connect MP3 audio playback module at %pin_data"
    //% pin_data.fieldEditor="gridpicker" pin_data.fieldOptions.columns=4 pin_data.fieldOptions.tooltips="false"
    export function audioPlaybackModule_connectPin(pin_data: DigitalPin): void {
        AudioPlaybackPin_data = pin_data;
    }

    /**
     * MP3 audio playback module send data.
     */
    function audioPlaybackModule_sendData(num: number): void {
        pins.digitalWritePin(AudioPlaybackPin_data, 1); 
        basic.pause(1);
        pins.digitalWritePin(AudioPlaybackPin_data, 0); 
        basic.pause(3);
        for (let index = 0; index < 8; index++) {
            pins.digitalWritePin(AudioPlaybackPin_data, 1); 
            if (num & 1) {
                control.waitMicros(2400);
                pins.digitalWritePin(AudioPlaybackPin_data, 0);
                control.waitMicros(800);
            } else {
                control.waitMicros(800);
                pins.digitalWritePin(AudioPlaybackPin_data, 0);
                control.waitMicros(2400);
            } 
            num >>= 1;
        }
        pins.digitalWritePin(AudioPlaybackPin_data, 1); 
    }

    /**
     * Digital demolition
     */
    function splitToDigit (n: number): Array<number> {
        let num = []
        while (n > 0) {
            // serial.writeLine("n--" + n);
            num.push(n % 10)
            n = Math.floor(n / 10)
        }
        return num;
    }

    /**
     * MP3 audio playback module select specified track(1-255) with no play.
     * @param specified_track mp3 module specified track number. eg: 1
     */
    //% advanced=true
    //% group="Output"
    //% blockId=YFSENSORS_audioPlaybackModuleSelectTrackNum weight=90 blockGap=15
    //% block="audio playback select specified track %specified_track| no play"
    //% specified_track.min=1 specified_track.max=255
    export function audioPlaybackModuleSelectTrackNum(specified_track: number): void {
        let s_track = specified_track;
        if(s_track >= 10){
            let s_track_num = splitToDigit(s_track);
            control.waitMicros(10);
            for (let index = s_track_num.length-1; index >= 0; index--) {
                audioPlaybackModule_sendData(s_track_num[index]); // Select the music
            }
        } else {
            audioPlaybackModule_sendData(s_track); // Select the music
        }
    }

    /**
     * MP3 audio playback module Playback settings.
     * @param specified_fun mp3 module specified track number. eg: YFAudioPlaybackFunWithNum.SelectPlay
     */
    //% advanced=true
    //% group="Output"
    //% blockId=YFSENSORS_audioPlaybackModuleFunSelect weight=89 blockGap=15
    //% block="audio playback %specified_fun"
    //% specified_fun.fieldEditor="gridpicker" specified_fun.fieldOptions.columns=2
    export function audioPlaybackModuleFunSelect(specified_fun: YFAudioPlaybackFunWithNum): void {
        audioPlaybackModule_sendData(specified_fun);
    }

    /**
     * MP3 audio playback module play specified track.
     * @param specified_fun mp3 module specified function code. eg: YFAudioPlaybackFunWithNum.SelectPlay
     * @param specified_track mp3 module specified track number. eg: 1
     */
    //% group="Output"
    //% blockId=YFSENSORS_audioPlaybackModuleFunWithNum weight=88 blockGap=15
    //% block="audio playback %specified_fun| %specified_track"
    //% specified_fun.fieldEditor="gridpicker" specified_fun.fieldOptions.columns=2
    export function audioPlaybackModuleFunWithNum(specified_fun: YFAudioPlaybackFunWithNum, specified_track: number): void {
        if (specified_fun == YFAudioPlaybackFunWithNum.SelectPlay || specified_fun == YFAudioPlaybackFunWithNum.SetInsertTrack) {
            if (specified_track >= 255) specified_track = 255;
        } else if (specified_fun == YFAudioPlaybackFunWithNum.SetVolume) {
            if (specified_track > 30) specified_track = 30;
        } else if (specified_fun == YFAudioPlaybackFunWithNum.SetEQ) {
            if (specified_track > 4) specified_track = 4;
        } else if (specified_fun == YFAudioPlaybackFunWithNum.SetPlayMode) {
            if (specified_track > 7) specified_track = 7;
        }
        
        let s_track = specified_track;
        if(s_track >= 10){
            let s_track_num = splitToDigit(s_track);
            control.waitMicros(10);
            for (let index = s_track_num.length-1; index >= 0; index--) {
                audioPlaybackModule_sendData(s_track_num[index]); // Select the music
            }
        } else {
            audioPlaybackModule_sendData(s_track); // Select the music
        }
        audioPlaybackModule_sendData(specified_fun);
    }


    /**
     * MP3 audio playback module Playback settings.
     * @param specified_fun mp3 module specified function code. eg: YFAudioPlaybackFun.Play
     */
    //% group="Output"
    //% blockId=YFSENSORS_audioPlaybackModuleFun weight=86 blockGap=15
    //% block="audio playback %specified_fun"
    //% specified_fun.fieldEditor="gridpicker" specified_fun.fieldOptions.columns=3
    export function audioPlaybackModuleFun(specified_fun: YFAudioPlaybackFun): void {
        audioPlaybackModule_sendData(specified_fun);
    }

    /**
     * Read the Busy Pin of the MP3 audio playback module or the Fixed voice broadcast.
     * @param pin_busy busy pin. eg: DigitalPin.P1
     * @param m_busy mp3 module or voice broadcast. eg: YFMVModule.MP3_AUDIO
     */
    //% advanced=true
    //% group="Output"
    //% blockId=YFSENSORS_readBusyPin weight=80 blockGap=15
    //% block="%m_busy read busy pin %pin_busy"
    //% pin_busy.fieldEditor="gridpicker" pin_busy.fieldOptions.columns=4
    //% m_busy.fieldEditor="gridpicker" m_busy.fieldOptions.columns=2
    export function readBusyPin(m_busy: YFMVModule, pin_busy: DigitalPin): boolean {
        let m_busyM = m_busy;  // no work
        let a: number = pins.digitalReadPin(pin_busy);
        if (a == 1) {
            return true;
        } else return false;
    }
    
    ///////////////////// Output - Voice Recorder Module ///////////////////////
    /**
     * voice recorder module play recorder once or loop, enable or disable speaker.
     * @param pin_vrm busy pin. eg: DigitalPin.P1
     * @param vrmfun voice recorder module function. eg: YFVRMFunction.PLAY_ONCE
     */
    //% group="Output"
    //% blockId=YFSENSORS_voiceRecorderModule weight=84 blockGap=15
    //% block="voice recorder module %pin_vrm| %vrmfun"
    //% pin_vrm.fieldEditor="gridpicker" pin_vrm.fieldOptions.columns=4
    //% vrmfun.fieldEditor="gridpicker" vrmfun.fieldOptions.columns=2
    export function voiceRecorderModule(pin_vrm: DigitalPin, vrmfun: YFVRMFunction): void {
        if (vrmfun == YFVRMFunction.PLAY_ONCE) {
            pins.digitalWritePin(pin_vrm, 0)
            control.waitMicros(2); // 2us
            pins.digitalWritePin(pin_vrm, 1)
            basic.pause(50); // 30ms
            pins.digitalWritePin(pin_vrm, 0)
        } else if (vrmfun == YFVRMFunction.PLAY_LOOP) {
            pins.digitalWritePin(pin_vrm, 0)
            control.waitMicros(2); // 2us
            pins.digitalWritePin(pin_vrm, 1)
            basic.pause(2050); // 2s
            pins.digitalWritePin(pin_vrm, 0)
        } else if (vrmfun == YFVRMFunction.SPEAKER_ENABLE) {
            pins.digitalWritePin(pin_vrm, 0)
        } else if (vrmfun == YFVRMFunction.SPEAKER_DISABLE) {
            pins.digitalWritePin(pin_vrm, 1)
        }
    }

    ///////////////////// Output - Traffic Light module ///////////////////////
    /**
     * Traffic Light module light up red, green or yellow led.
     * @param tlm1Pin pin 1. eg: DigitalPin.P1
     * @param tlm2Pin pin 2. eg: DigitalPin.P2
     * @param wColor which color led. eg: YFTrafficLightLED.AllTurnOFF
     */
    //% group="Output"
    //% blockId=YFSENSORS_trafficLightModule weight=80 blockGap=15
    //% block="traffic light %tlm1Pin| %tlm2Pin| %wColor"
    //% tlm1Pin.fieldEditor="gridpicker" tlm1Pin.fieldOptions.columns=4
    //% tlm2Pin.fieldEditor="gridpicker" tlm2Pin.fieldOptions.columns=4
    //% wColor.fieldEditor="gridpicker" wColor.fieldOptions.columns=2
    export function trafficLightModule(tlm1Pin: DigitalPin, tlm2Pin: DigitalPin, wColor: YFTrafficLightLED): void {
        switch (wColor) {
            case YFTrafficLightLED.RedLED:            // Red LED
                pins.digitalWritePin(tlm1Pin, 0);
                pins.digitalWritePin(tlm2Pin, 1);
                break;
            case YFTrafficLightLED.YellowLED:         // Yellow LED
                pins.digitalWritePin(tlm1Pin, 1);
                pins.digitalWritePin(tlm2Pin, 0);
                break;
            case YFTrafficLightLED.GreenLED:          // Green LED
                pins.digitalWritePin(tlm1Pin, 1);
                pins.digitalWritePin(tlm2Pin, 1);
                break;
            default: // YFTrafficLightLED.AllTurnOFF: // all lights turn off
                pins.digitalWritePin(tlm1Pin, 0);
                pins.digitalWritePin(tlm2Pin, 0);
                break;
        }
    }

    ///////////////////// Input Analog Sensors ///////////////////////
    /**
     * Read the Analog Input Sensor Module.
     * @param aimPin pin. eg: AnalogPin.P1
     * @param aim pin. eg: YFAnalogInputModule.LIGHT
     */
    //% group="Input"
    //% blockId=YFSENSORS_analogInputModule weight=100 blockGap=15
    //% block="at pin %aimPin| %aim| module"
    //% aimPin.fieldEditor="gridpicker" aimPin.fieldOptions.columns=4
    //% aim.fieldEditor="gridpicker" aim.fieldOptions.columns=2
    export function analogInputModule(aimPin: AnalogPin, aim: YFAnalogInputModule): number {
        let aimM = aim;  // no work
        return pins.analogReadPin(aimPin);
    }

    /**
     * Read the Temperature Sensor Module.
     * @param tempPin pin. eg: AnalogPin.P1
     */
    //% group="Input"
    //% blockId=YFSENSORS_readTemperatureSensor weight=95 blockGap=15
    //% block="temperature sensor %tempPin| temperature value"
    //% tempPin.fieldEditor="gridpicker" tempPin.fieldOptions.columns=4
    export function readTemperatureSensor(tempPin: AnalogPin): number {
        let val = pins.analogReadPin(tempPin); 
        let tvalue = (val * 3.3 * 100) / 1024;
        return Math.floor(tvalue * 10) / 10;// 保留1位小数
    }

    ///////////////////// Input Digital Sensors ///////////////////////
    /**
     * Read the Digital Input Sensor Module (Default all modules trigger back true).
     * @param dimPin pin. eg: DigitalPin.P8
     * @param dim pin. eg: YFDigitalInputModule.BUTTON
     */
    //% group="Input"
    //% blockId=YFSENSORS_digitalInputModule weight=90 blockGap=15
    //% block="at pin %dimPin| %dim| module"
    //% dimPin.fieldEditor="gridpicker" dimPin.fieldOptions.columns=4
    //% dim.fieldEditor="gridpicker" dim.fieldOptions.columns=2
    export function digitalInputModule(dimPin: DigitalPin, dim: YFDigitalInputModule): boolean {
        
        pins.setPull(dimPin, PinPullMode.PullNone);
        let a: number = 0;
        if(dim == YFDigitalInputModule.BUTTON 
        || dim == YFDigitalInputModule.MAGNETIC_SENSOR 
        || dim == YFDigitalInputModule.TILT_SENSOR 
        || dim == YFDigitalInputModule.INFRARED_PROXIMITY_SENSOR 
        || dim == YFDigitalInputModule.COLLISION_SWITCH
        || dim == YFDigitalInputModule.PATROL_LEFT 
        || dim == YFDigitalInputModule.PATROL_RIGHT
        || dim == YFDigitalInputModule.PATROL_SINGLE
        || dim == YFDigitalInputModule.LIQUID_LEVEL ){
            a = pins.digitalReadPin(dimPin);
            if (a == 1) return false;
            else    return true;
        } else {
            a = pins.digitalReadPin(dimPin);
            if (a == 1) return true;
            else    return false;
        }
    }

    /**
     * Read the Button Module.
     * @param dimPin pin. eg: DigitalPin.P8
     * @param value pin. eg: enButton.Press
     */
    //% group="Input"
    //% blockId=YFSENSORS_Digital_Button weight=83 blockGap=15
    //% block="Button|pin %dimPin|value %value" 
    //% dimPin.fieldEditor="gridpicker" dimPin.fieldOptions.columns=4
    //% value.fieldEditor="gridpicker" value.fieldOptions.columns=2
    export function Button(dimPin: DigitalPin, value: enButton): boolean {
        pins.setPull(dimPin, PinPullMode.PullNone);
		let pin = dimPin;
        return pins.digitalReadPin(pin) == value;
    }

    /** not work 
	 * Registers code to run when a Button/Collision event is detected.
     * param dimE module. eg: YFDigitalInputModuleE.BUTTON
     * param dimEPin pin. eg: DigitalPin.P2
     * event event. eg: YFDigitalInputEvent.Clicked
	 */
    // group="Input"
    // blockId=YFSENSORS_onevent weight=89 blockGap=15
    // block="%dimE on %dimEPin| %event"
    // block="%dimE on %dimEPin| pressed"
    // dimEPin.fieldEditor="gridpicker" dimEPin.fieldOptions.columns=4
    // event.fieldEditor="gridpicker" event.fieldOptions.columns=3
    // export function onEvent(dimE: YFDigitalInputModuleE, dimEPin: DigitalPin, event: YFDigitalInputEvent, handler: Action) {
    // export function onEvent(dimE: YFDigitalInputModuleE, dimEPin: DigitalPin, handler: Action) {
    //     let dimME = dimE;  // no work
    //     // pins.setEvents(dimEPin, PinEventType.Edge);
    //     // control.onEvent(<number>dimEPin, <number>event, handler); // register handler
    //     control.onEvent(<number>dimEPin, <number>DAL.MICROBIT_BUTTON_EVT_CLICK, handler); // register handler
    // }

    // Checks whether the crash sensor is currently pressed.
    // Checks whether the motion sensor is currently detecting any motion.
    
    ///////////////////// Input DHT11 Sensors ///////////////////////
    /**
     * Get the temperature or humidity of the dht11 sensor.
     * @param pin pin. eg: DigitalPin.P2
     * @param dht11state echo pin. eg: YFDHT11_state.DHT11_temperature_C
     */
    //% group="Input"
    //% blockId=YFSENSORS_read_dht11 weight=82 blockGap=15
    //% block="DHT11 sensor %pin %dht11state value"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% dht11state.fieldEditor="gridpicker" dht11state.fieldOptions.columns=1
    //% inlineInputMode=inline
    export function dht11Sensor(pin: DigitalPin, dht11state: YFDHT11_state): number {
        //initialize
        basic.pause(1000)
        let _temperature: number = -999.0
        let _humidity: number = -999.0
        let checksum: number = 0
        let checksumTmp: number = 0
        let dataArray: boolean[] = []
        let resultArray: number[] = []
        //let pin = DigitalPin.P1
        //pin = RJpin_to_digital(Rjpin)
        for (let index = 0; index < 40; index++) dataArray.push(false)
        for (let index = 0; index < 5; index++) resultArray.push(0)

        pins.setPull(pin, PinPullMode.PullUp)
        pins.digitalWritePin(pin, 0) //begin protocol, pull down pin
        basic.pause(18)
        pins.digitalReadPin(pin) //pull up pin
        control.waitMicros(40)
        while (pins.digitalReadPin(pin) == 0); //sensor response
        while (pins.digitalReadPin(pin) == 1); //sensor response

        //read data (5 bytes)
        for (let index = 0; index < 40; index++) {
            while (pins.digitalReadPin(pin) == 1);
            while (pins.digitalReadPin(pin) == 0);
            control.waitMicros(28)
            //if sensor still pull up data pin after 28 us it means 1, otherwise 0
            if (pins.digitalReadPin(pin) == 1) dataArray[index] = true
        }
        //convert byte number array to integer
        for (let index = 0; index < 5; index++)
            for (let index2 = 0; index2 < 8; index2++)
                if (dataArray[8 * index + index2]) resultArray[index] += 2 ** (7 - index2)
        //verify checksum
        checksumTmp = resultArray[0] + resultArray[1] + resultArray[2] + resultArray[3]
        checksum = resultArray[4]
        if (checksumTmp >= 512) checksumTmp -= 512
        if (checksumTmp >= 256) checksumTmp -= 256
        switch (dht11state) {
            case YFDHT11_state.DHT11_temperature_C:
                _temperature = resultArray[2] + resultArray[3] / 100
                return _temperature
            case YFDHT11_state.DHT11_humidity:
                _humidity = resultArray[0] + resultArray[1] / 100
                return _humidity
        }
        return 0
    }
    
    ///////////////////// Input Sonar Sensors ///////////////////////
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param trig trigger pin. eg: DigitalPin.P0
     * @param echo echo pin. eg: DigitalPin.P8
     * @param unit desired conversion unit. eg: YFPingUnit.Centimeters
     * @param maxCmDistance maximum distance in centimeters (default is 250)
     */
    //% group="Input"
    //% blockId=YFSENSORS_sonar_ping2 weight=78 blockGap=15
    //% block="ping trig |%trig echo |%echo unit |%unit"
    //% trig.fieldEditor="gridpicker" trig.fieldOptions.columns=4 
    //% echo.fieldEditor="gridpicker" echo.fieldOptions.columns=4 
    //% unit.fieldEditor="gridpicker" unit.fieldOptions.columns=3
    //% inlineInputMode=inline
    export function ping2(trig: DigitalPin, echo: DigitalPin, unit: YFPingUnit, maxCmDistance = 250): number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone)
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        let d = pins.pulseIn(echo, PulseValue.High, 105000);    // 最多等待 105 毫秒

        switch (unit) {
            case YFPingUnit.Centimeters:
                let d_C = Math.idiv(d, 58);
                // basic.pause(30)
                return d_C;
            case YFPingUnit.Inches:
                let d_I = Math.idiv(d, 148);
                // basic.pause(30)
                return d_I;
            default:
                // basic.pause(30)
                return d ;
        }
    }
    // /**
    //  * Send a ping and get the echo time (in microseconds) as a result
    //  * @param trig trigger pin. eg: DigitalPin.P2
    //  * @param echo echo pin. eg: DigitalPin.P8
    //  * @param unit desired conversion unit. eg: YFPingUnit.Centimeters
    //  * @param maxCmDistance maximum distance in centimeters (default is 450)
    //  */
    // //% group="Input"
    // //% blockId=YFSENSORS_sonar_ping weight=79 blockGap=15
    // //% block="ping trig |%trig echo |%echo unit |%unit"
    // //% trig.fieldEditor="gridpicker" trig.fieldOptions.columns=4 
    // //% echo.fieldEditor="gridpicker" echo.fieldOptions.columns=4 
    // //% unit.fieldEditor="gridpicker" unit.fieldOptions.columns=3
    // //% inlineInputMode=inline
    // export function ping(trig: DigitalPin, echo: DigitalPin, unit: YFPingUnit, maxCmDistance = 450): number {
    //     // send pulse
    //     pins.setPull(trig, PinPullMode.PullNone);
    //     pins.digitalWritePin(trig, 0);
    //     control.waitMicros(10);
    //     pins.digitalWritePin(trig, 1);
    //     control.waitMicros(50);
    //     pins.digitalWritePin(trig, 0);

    //     // read pulse
    //     const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

    //     switch (unit) {
    //         case YFPingUnit.Centimeters: return Math.idiv(d, 58);
    //         case YFPingUnit.Inches: return Math.idiv(d, 148);
    //         default: return d ;
    //     }
    // }
    
    ///////////////////// Output - Motor Drive ///////////////////////
    /**
     * Connects the Motor drive module to the specified pin.
     * @param pin_dir dir pin. eg: DigitalPin.P15
     * @param pin_pwm pwm pin. eg: AnalogPin.P16
     */
    //% subcategory="MotorDrive"
    //% blockId="YFSENSORS_motorConnectPin" weight=12 blockGap=15
    //% block="connect Motor drive %w_M| DIR %pin_dir| PWM %pin_pwm"
    //% pin_dir.fieldEditor="gridpicker" pin_dir.fieldOptions.columns=4 pin_dir.fieldOptions.tooltips="false"
    //% pin_pwm.fieldEditor="gridpicker" pin_pwm.fieldOptions.columns=4 pin_pwm.fieldOptions.tooltips="false"
    export function motorConnectPin(w_M: YFMotorsPin, pin_dir: DigitalPin, pin_pwm: AnalogPin): void {
        if (w_M == YFMotorsPin.M1) {
            YFSENSORSMotor1D = pin_dir
            YFSENSORSMotor1A = pin_pwm
        } else if (w_M == YFMotorsPin.M2) {
            YFSENSORSMotor2D = pin_dir
            YFSENSORSMotor2A = pin_pwm
        }
    }

    function clamp(value: number, min: number, max: number): number {
        return Math.max(Math.min(max, value), min);
    }
    /**
     * Set the direction and speed of YFSENSORS motor.
     * @param index motor m1/m2/all. eg: YFMotors.MAll
     * @param direction direction to turn. eg: YFDir.CW
     * @param speed speed of motors (0 to 255). eg: 120
     */
    //% subcategory="MotorDrive"
    //% blockId=YFSENSORS_MotorRun weight=11 blockGap=15
    //% block="motor|%index|move|%direction|at speed|%speed"
    //% speed.min=0 speed.max=255
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=2
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=2
    export function motorRun(index: YFMotors, direction: YFDir, speed: number): void {
        if (index > 2 || index < 0)
            return
        
        let dir_m2 = direction == YFDir.CW ? YFDir.CCW : YFDir.CW;
        speed = clamp(speed, 0, 255) * 4.01;  // 0~255 > 0~1023

        if (index == YFMotors.M1) {
            pins.digitalWritePin(YFSENSORSMotor1D, direction);
            pins.analogWritePin(YFSENSORSMotor1A, speed);
        } else if (index == YFMotors.M2) {
            pins.digitalWritePin(YFSENSORSMotor2D, dir_m2);
            pins.analogWritePin(YFSENSORSMotor2A, speed);
        } else if (index == YFMotors.MAll) {
            pins.digitalWritePin(YFSENSORSMotor1D, direction);
            pins.analogWritePin(YFSENSORSMotor1A, speed);
            pins.digitalWritePin(YFSENSORSMotor2D, dir_m2);
            pins.analogWritePin(YFSENSORSMotor2A, speed);
        }
    }

    /**
     * Stop the YFSENSORS motor.
     * @param motor motor m1/m2/all. eg: YFMotors.MAll
     */
    //% subcategory="MotorDrive"
    //% blockId=YFSENSORS_motorStop weight=10 blockGap=15
    //% block="motor |%motor stop"
    //% motor.fieldEditor="gridpicker" motor.fieldOptions.columns=2 
    export function motorStop(motor: YFMotors): void {
        motorRun(motor, 0, 0);
    }

    ///////////////////// DigitalTubes ///////////////////////
    /**
     * Connects the digital tube module to the specified pin.
     * @param pin_d DIO pin. eg: DigitalPin.P1
     * @param pin_c CLK pin. eg: DigitalPin.P2
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_4digitaltubes_pins" weight=100 blockGap=8
    //% block="connect 4 digital tubes at DIO %pin_d and CLK %pin_c"
    //% pin_c.fieldEditor="gridpicker" pin_c.fieldOptions.columns=4 pin_c.fieldOptions.tooltips="false"
    //% pin_d.fieldEditor="gridpicker" pin_d.fieldOptions.columns=4 pin_d.fieldOptions.tooltips="false"
    export function connectPIN(pin_d: DigitalPin, pin_c: DigitalPin): void {
        PINCLK = pin_c;
        PINDIO = pin_d;
        on();
        clear();
    }

    /** FrameStart_1650 
     */
    function FrameStart_1650(): void {
        pins.digitalWritePin(PINDIO, 1);
        pins.digitalWritePin(PINCLK, 1);
        pins.digitalWritePin(PINDIO, 0);
    }

    /** FrameEnd_1650 
     */
    function FrameEnd_1650(): void {
        pins.digitalWritePin(PINDIO, 0);
        pins.digitalWritePin(PINCLK, 1);
        pins.digitalWritePin(PINDIO, 1);
    }

    /** FrameAck_1650 
     */
    function FrameAck_1650(): number {
        if(pins.digitalReadPin(PINDIO) == 0) {
            pins.digitalWritePin(PINCLK , 1);	
            pins.digitalWritePin(PINCLK , 0);	
            return 0;
        } else {
            return 1;
        }
    }

    /** writeByte 
     */
    function writeByte(firstByte: number, secondByte: number): number {
        let tmp=0;
        let i=0;
        let err=0;		
        tmp=firstByte;

        FrameStart_1650();
        for(i=0;i<8;i++) {
            if(tmp&0x80) {
                pins.digitalWritePin(PINDIO, 1);
            } else {
                pins.digitalWritePin(PINDIO, 0);
            }
            pins.digitalWritePin(PINCLK , 0);
            pins.digitalWritePin(PINCLK , 1);
            pins.digitalWritePin(PINCLK , 0);
            
            tmp=tmp<<1;
        }
        if(FrameAck_1650() == 1) {
            err=1;
        }
        tmp=secondByte;
        for(i=0;i<8;i++) {
            if(tmp&0x80) {
                pins.digitalWritePin(PINDIO, 1);
            } else {
                pins.digitalWritePin(PINDIO, 0);
            }
        
            pins.digitalWritePin(PINCLK , 0);
            pins.digitalWritePin(PINCLK , 1);
            pins.digitalWritePin(PINCLK , 0);
            
            tmp=tmp<<1;
        }
        if(FrameAck_1650()==1) {
            err=1;
        }
        FrameEnd_1650();
        return err;
    }

    /**
     * send command to display
     * @param c command, eg: 0
     */
    function cmd(c: number) {
        writeByte(CMD_SYSTEM_CONFIG, c);
    }

    /**
     * send data to display
     * @param d data, eg: 0
     * @param bit bit, eg: 0
     */
    function dat(bit: number, d: number) {
        writeByte(DatAddressArray[bit % 4], d);
    }

    /**
     * turn on display
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_ON" weight=15 blockGap=8
    //% block="turn on display"
    export function on() {
        cmd(_intensity * 16 + 1)
    }

    /**
     * turn off display
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_OFF" weight=10 blockGap=8
    //% block="turn off display"
    export function off() {
        _intensity = 0
        cmd(0)
    }

    /**
     * clear display content
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_CLEAR" weight=5 blockGap=8
    //% block="clear display"
    export function clear() {
        dat(0, 0)
        dat(1, 0)
        dat(2, 0)
        dat(3, 0)
        dbuf = [0, 0, 0, 0]
    }

    /**
     * show a digital in given position
     * @param num is number (0-15) will be shown, eg: 1
     * @param bit is position, eg: 0
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_DIGIT" weight=40 blockGap=8
    //% block="show digit %num|at %bit"
    //% num.max=15 num.min=0
    //% bit.max=3 bit.min=0
    export function digit(num: number, bit: number) {
        dbuf[bit % 4] = _SEG[num % 16]
        dat(bit, _SEG[num % 16])
    }

    /**
     * show a number in display
     * @param num is number will be shown, eg: 100
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_SHOW_NUMBER" weight=45 blockGap=8
    //% block="show number %num"
    export function showNumber(num: number) {
        if (num < 0) {
            dat(0, 0x40) // '-'
            num = -num
        }
        else
            digit(Math.idiv(num, 1000) % 10, 0)
        digit(num % 10, 3)
        digit(Math.idiv(num, 10) % 10, 2)
        digit(Math.idiv(num, 100) % 10, 1)
    }

    /**
     * show a number in hex format
     * @param num is number will be shown, eg: 123
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_SHOW_HEX_NUMBER" weight=43 blockGap=8
    //% block="show hex number %num"
    export function showHex(num: number) {
        if (num < 0) {
            dat(0, 0x40) // '-'
            num = -num
        }
        else
            digit((num >> 12) % 16, 0)
        digit(num % 16, 3)
        digit((num >> 4) % 16, 2)
        digit((num >> 8) % 16, 1)
    }

    /**
     * show Dot Point in given position
     * @param bit is positiion, eg: 0
     * @param show is true/false, eg: true
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_SHOW_DP" weight=38 blockGap=8
    //% block="at %bit|show dot point %show"
    //% bit.max=3 bit.min=0
    export function showDpAt(bit: number, show: boolean) {
        if (show) dat(bit, dbuf[bit % 4] | 0x80)
        else dat(bit, dbuf[bit % 4] & 0x7F)
    }

    /**
     * set display intensity
     * @param dat is intensity of the display, eg: 3
     */
    //% subcategory="DigitalTube"
    //% blockId="YFSENSORS_TM650_INTENSITY" weight=35 blockGap=8
    //% block="set intensity %dat"
    //% dat.max=7 dat.min=0
    export function setIntensity(dat: number) {
        if ((dat < 0) || (dat > 8))
            return;
        if (dat == 0)
            off()
        else {
            _intensity = dat
            cmd((dat << 4) | 0x01)
        }
    }
    ///////////////////// DigitalTubes ///////////////////////
    
    /////////////////////// IR ///////////////////////
    function pushBit(bit: number): number {
        irState.bitsReceived += 1;
        if (irState.bitsReceived <= 8) {
            // ignore all address bits
            if (irState.protocol === YFIrProtocol.Keyestudio && bit === 1) {
                // recover from missing message bits at the beginning
                // Keyestudio address is 0 and thus missing bits can be easily detected
                // by checking for the first inverse address bit (which is a 1)
                irState.bitsReceived = 9;
            }
            return IR_INCOMPLETE;
        }
        if (irState.bitsReceived <= 16) {
            // ignore all inverse address bits
            return IR_INCOMPLETE;
        } else if (irState.bitsReceived < 24) {
            irState.commandBits = (irState.commandBits << 1) + bit;
            return IR_INCOMPLETE;
        } else if (irState.bitsReceived === 24) {
            irState.commandBits = (irState.commandBits << 1) + bit;
            return irState.commandBits & 0xff;
        } else {
            // ignore all inverse command bits
            return IR_INCOMPLETE;
        }
    }

    function detectCommand(markAndSpace: number): number {
        if (markAndSpace < 1600) {
            // low bit
            return pushBit(0);
        } else if (markAndSpace < 2700) {
            // high bit
            return pushBit(1);
        }

        irState.bitsReceived = 0;

        if (markAndSpace < 12500) {
            // Repeat detected
            return IR_REPEAT;
        } else if (markAndSpace < 14500) {
            // Start detected
            return IR_INCOMPLETE;
        } else {
            return IR_INCOMPLETE;
        }
    }

    function enableIrMarkSpaceDetection(pin: DigitalPin) {
        pins.setPull(pin, PinPullMode.PullNone);

        let mark = 0;
        let space = 0;

        pins.onPulsed(pin, PulseValue.Low, () => {
            // HIGH, see https://github.com/microsoft/pxt-microbit/issues/1416
            mark = pins.pulseDuration();
        });

        pins.onPulsed(pin, PulseValue.High, () => {
            // LOW
            space = pins.pulseDuration();
            const command = detectCommand(mark + space);
            if (command !== IR_INCOMPLETE) {
                control.raiseEvent(MICROBIT_MAKERBIT_IR_NEC, command);
            }
        });
    }

    /**
     * Connects to the IR receiver module at the specified pin and configures the IR protocol.
     * @param pin IR receiver pin. eg: DigitalPin.P2
     * @param protocol IR protocol. eg: YFIrProtocol.NEC
     */
    //% subcategory="IR_Receiver"
    //% blockId="YFSENSORS_infrared_connect_receiver" weight=15 blockGap=15
    //% block="connect IR receiver at pin %pin and decode %protocol"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false"
    //%
    export function connectIrReceiver(pin: DigitalPin, protocol: YFIrProtocol): void {
        if (irState) {
            return;
        }

        irState = {
            protocol: protocol,
            bitsReceived: 0,
            commandBits: 0,
            command: YFIrButton.Any,
            hasNewCommand: false,
        };

        enableIrMarkSpaceDetection(pin);

        let activeCommand = IR_INCOMPLETE;
        let repeatTimeout = 0;
        const REPEAT_TIMEOUT_MS = 120;

        control.onEvent(
            MICROBIT_MAKERBIT_IR_NEC,
            EventBusValue.MICROBIT_EVT_ANY,
            () => {
                const necValue = control.eventValue();

                // Refresh repeat timer
                if (necValue <= 255 || necValue === IR_REPEAT) {
                    repeatTimeout = input.runningTime() + REPEAT_TIMEOUT_MS;
                }

                // Process a new command
                if (necValue <= 255 && necValue !== activeCommand) {
                    if (activeCommand >= 0) {
                        control.raiseEvent(
                            MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
                            activeCommand
                        );
                    }

                    irState.hasNewCommand = true;
                    irState.command = necValue;
                    activeCommand = necValue;
                    control.raiseEvent(MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID, necValue);
                }
            }
        );

        control.inBackground(() => {
            while (true) {
                if (activeCommand === IR_INCOMPLETE) {
                    // sleep to save CPU cylces
                    basic.pause(2 * REPEAT_TIMEOUT_MS);
                } else {
                    const now = input.runningTime();
                    if (now > repeatTimeout) {
                        // repeat timed out
                        control.raiseEvent(
                            MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
                            activeCommand
                        );
                        activeCommand = IR_INCOMPLETE;
                    } else {
                        basic.pause(REPEAT_TIMEOUT_MS);
                    }
                }
            }
        });
    }

    /**
     * Do something when a specific button is pressed or released on the remote control.
     * @param button the button to be checked
     * @param action the trigger action
     * @param handler body code to run when event is raised
     */
    //% subcategory="IR_Receiver"
    //% blockId=YFSENSORS_infrared_on_ir_button weight=13 blockGap=15
    //% block="on IR button | %button | %action"
    //% button.fieldEditor="gridpicker"
    //% button.fieldOptions.columns=3
    //% button.fieldOptions.tooltips="false"
    export function onIrButton(button: YFIrButton, action: YFIrButtonAction, handler: () => void) {
        control.onEvent(
            action === YFIrButtonAction.Pressed
                ? MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID
                : MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
            button === YFIrButton.Any ? EventBusValue.MICROBIT_EVT_ANY : button,
            () => {
                irState.command = control.eventValue();
                handler();
            }
        );
    }

    /**
     * Returns the code of the IR button that was pressed last. Returns -1 (YFIrButton.Any) if no button has been pressed yet.
     */
    //% subcategory="IR_Receiver"
    //% blockId=YFSENSORS_infrared_ir_button_pressed weight=10 blockGap=15
    //% block="IR button"
    export function irButton(): number {
        if (!irState) {
            return YFIrButton.Any;
        }
        return irState.command;
    }

    /**
     * Returns true if any button was pressed since the last call of this function. False otherwise.
     */
    //% subcategory="IR_Receiver"
    //% blockId=YFSENSORS_infrared_was_any_button_pressed weight=7 blockGap=15
    //% block="any IR button was pressed"
    export function wasAnyIrButtonPressed(): boolean {
        if (!irState) {
            return false;
        }
        if (irState.hasNewCommand) {
            irState.hasNewCommand = false;
            return true;
        } else {
            return false;
        }
    }

    /**
     * Returns the command code of a specific IR button.
     * @param button the button
     */
    //% subcategory="IR_Receiver"
    //% blockId=YFSENSORS_infrared_button_code weight=5 blockGap=15
    //% button.fieldEditor="gridpicker"
    //% button.fieldOptions.columns=3
    //% button.fieldOptions.tooltips="false"
    //% block="IR button code %button"
    export function irButtonCode(button: YFIrButton): number {
        return button as number;
    }

    /**
     * Do something when a specific button is pressed or released on the remote control.
     * @param button the button to be checked
     * @param action the trigger action
     * @param handler body code to run when event is raised
     */
    //% subcategory="IR_Receiver"
    //% group="Handle-type_IR_Control"
    //% blockId=YFSENSORS_infrared_on_ir_button_handle weight=30 blockGap=15
    //% block="on IR button | %button | %action"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% button.fieldOptions.tooltips="false"
    export function onIrButton_Handle(button: YFIrButton_Handle, action: YFIrButtonAction, handler: () => void) {
        control.onEvent(
            action === YFIrButtonAction.Pressed ? MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID : MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
            button === YFIrButton_Handle.Any ? EventBusValue.MICROBIT_EVT_ANY : button,
            () => {
                irState.command = control.eventValue();
                handler();
            }
        );
    }

    /**
     * Returns the command code of a specific Handle Type IR button.
     * @param button the button
     */
    //% subcategory="IR_Receiver"
    //% group="Handle-type_IR_Control"
    //% blockId=YFSENSORS_infrared_button_code_handle weight=2 blockGap=15
    //% block="Handle Type IR button code %button"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% button.fieldOptions.tooltips="false"
    export function irButtonCode_Handle(button: YFIrButton_Handle): number {
        return button as number;
    }
    /////////////////////// IR ///////////////////////
}
