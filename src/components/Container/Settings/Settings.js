/* eslint-disable react/no-unknown-property */
import React, { useContext, useState } from 'react';
import './Settings.scss';
import SpinInfinite from '../../General/SpinInfinite/SpinInfinite';
import Input from '../../General/Input/Input';
import '../../../assets/bootstrap-icons/bootstrap.scss';
import List from '../../General/List/List';
import ListItem from '../../General/List/ListItem/ListItem';
import SettingOption from '../../General/SettingOption/SettingOption';
import SettingsIcon from '../../General/SettingsIcon/SettingsIcon';
import PropTypes from 'prop-types';
import { System } from '../../../context/System/System';
import SettingsDropdown from '../../General/SettingsDropdown/SettingsDropdown';
SettingsTitle.propTypes = {
    children: PropTypes.node.isRequired
};
function SettingsTitle({ children }) {
    return <p className="title">{children}</p>;
}
function Settings() {
    const [showColor, setShowColor] = useState(false);
    const [showTheme, setShowTheme] = useState(false);
    const context = useContext(System);
    function page() {}
    return (
        <>
            <div className="menu">
                <a className="a user">
                    <img src="/icons/apps/settings/user.svg" />
                    <div>
                        <p>瓶盖</p>
                        <p>tanjingyuan@windows12.com</p>
                    </div>
                </a>
                <Input placeholder="查找设置" before={<i className="bi bi-search"></i>} beforeWidth={20}></Input>
                <List>
                    <ListItem enable={true} onClick={page('system')} imgsrc="/icons/apps/settings/system.png">
                        系统
                    </ListItem>
                    <ListItem enable={true} onClick={page('bluetooth')} imgsrc="/icons/apps/settings/bluetooth.png">
                        蓝牙和其他设备
                    </ListItem>
                    <ListItem enable={true} onClick={page('network')} imgsrc="/icons/apps/settings/network.png">
                        网络和 Internet
                    </ListItem>
                    <ListItem enable={true} onClick={page('appearance')} imgsrc="/icons/apps/settings/personal.png">
                        个性化
                    </ListItem>
                    <ListItem enable={true} onClick={page('apps')} imgsrc="/icons/apps/settings/apps.png">
                        应用
                    </ListItem>
                    <ListItem enable={true} onClick={page('user')} imgsrc="/icons/apps/settings/user.png">
                        账户
                    </ListItem>
                    <ListItem enable={true} onClick={page('time')} imgsrc="/icons/apps/settings/time.png">
                        时间和语言
                    </ListItem>
                    <ListItem enable={true} onClick={page('game')} imgsrc="/icons/apps/settings/game.png">
                        游戏
                    </ListItem>
                    <ListItem enable={true} onClick={page('help')} imgsrc="/icons/apps/settings/help.png">
                        辅助功能
                    </ListItem>
                    <ListItem enable={true} onClick={page('safe')} imgsrc="/icons/apps/settings/safe.png">
                        隐私和安全性
                    </ListItem>
                    <ListItem enable={true} onClick={page('update')} imgsrc="/icons/apps/settings/update.png">
                        Windows 更新
                    </ListItem>
                </List>
            </div>
            <div className="page">
                <div className="cnt system show">
                    <SettingsTitle>系统</SettingsTitle>
                    <div style={{ display: 'flex' }}>
                        <p style={{ fontSize: 70, margin: '-8px 10px 0px 20px' }}>
                            <SettingsIcon glyph="" linear={false} />
                        </p>
                        <div>
                            <p className="large">Desktop-PingGai</p>
                            <p style={{ color: '#7f7f7f', margin: '-8px 0 -5px 0' }}>瓶盖</p>
                            <a
                                style={{
                                    color: 'var(--href)',
                                    textDecoration: 'underline !important'
                                }}
                                className="a"
                            >
                                重命名
                            </a>
                        </div>
                    </div>
                    <div className="setting-list">
                        <SettingOption icon={<SettingsIcon glyph="" />} title="显示" description="显示器、亮度、夜间模式、显示描述" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="声音" description="声音级别、输入、输出、声音设备" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="通知" description="来自系统和应用的警报" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="专注助手" description="通知、自动规则" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="电源" description="睡眠、电池使用情况、节电模式" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="存储" description="存储空间、驱动器、配置规则" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="多任务处理" description="贴靠窗口、桌面、任务切换" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="激活" description="激活状态、订阅、产品密钥" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="疑难解答" description="建议的疑难解答、首选项和历史记录" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="恢复" description="重置、高级启动、返回" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="投影到此电脑" description="权限、配对 PIN、可发现性" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="远程桌面" description="远程桌面用户、连接权限" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="剪贴板" description="剪贴和复制历史记录、同步、清除" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="关于" description="设备规格、重命名电脑、Windows" type="more" />
                    </div>
                </div>
                <div className="cnt bluetooth">
                    <SettingsTitle>蓝牙与设备</SettingsTitle>
                    <div style={{ display: 'flex' }}>
                        <p style={{ fontSize: 70, margin: '-8px 10px 0px 20px' }}>
                            <SettingsIcon glyph="" linear={false} />
                        </p>
                        <div>
                            <p style={{ color: '#7f7f7f', margin: '-8px 0 -5px 0' }}>我的蓝牙名称</p>
                            <p
                                style={{
                                    fontSize: 28,
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                bluetooth-PingGai
                            </p>
                            <p className="bluetooth-tips-text" style={{ color: '#7f7f7f', margin: '-8px 0 -5px 0' }}>
                                这是您在其他设备的蓝牙列表中的名称
                            </p>
                            <a
                                style={{
                                    color: 'var(--href)',
                                    textDecoration: 'underline !important'
                                }}
                                className="a"
                            >
                                重命名
                            </a>
                        </div>
                    </div>
                    <div className="setting-list">
                        <SettingOption icon={<SettingsIcon glyph="" />} title="连接" description="搜索新的蓝牙设备" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="设备" description="蓝牙鼠标、键盘、其他蓝牙设备" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="打印机与扫描仪" description="设置打印机、排除故障" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="手机" description="访问 Android 设备的照片、文件等" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="触控板" description="点击、滚动、缩放、手势" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="触控笔与触摸" description="设置触控笔、设置触控屏幕" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="USB设备" description="通过USB连接更多设备..." type="more" />
                    </div>
                </div>
                <div className="cnt network">
                    <SettingsTitle>网络和 Internet</SettingsTitle>
                    <div style={{ display: 'flex' }}>
                        <p style={{ fontSize: 70, margin: '-8px 15px 0px 20px' }}>
                            <SettingsIcon glyph="" linear={false} />
                        </p>
                        <div>
                            <p style={{ color: '#7f7f7f', margin: '-8px 0 -5px 0' }}>Wifi 已连接</p>
                            <p
                                style={{
                                    fontSize: 28,
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                PingGai - 5G
                            </p>
                            <a
                                style={{
                                    color: 'var(--href)',
                                    textDecoration: 'underline !important'
                                }}
                                className="a"
                            >
                                断开
                            </a>
                        </div>
                    </div>
                    <div className="setting-list">
                        <SettingOption icon={<SettingsIcon glyph="" />} title="无线局域网" description="连接、管理已连接网络" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="移动网络 未连接" description="通过移动网络访问互联网" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="VPN" description="添加、连接、管理" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="移动互联网" description="通过本机移动网络共享互联网" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="飞行模式" description="暂停所有通讯与设备连接" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="代理" description="用于 Wifi 和以太网的代理服务器" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="拨号" description="通过 Wifi 网络拨打电话" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="高级设置" description="查看所有网络适配器、网络重置" type="more" />
                    </div>
                </div>
                <div className="cnt appearance">
                    <SettingsTitle>个性化</SettingsTitle>
                    <SettingOption
                        icon={<SettingsIcon glyph="" />}
                        title="颜色"
                        description="设置 Windows 的主题色"
                        type="expand"
                        onClick={() => {
                            setShowColor(!showColor);
                        }}
                    />
                    <SettingsDropdown className="app-color" show={showColor}>
                        <p>当前颜色</p>
                        <div
                            className="color"
                            style={{
                                background: 'linear-gradient(120deg,var(--theme-1),var(--theme-2))'
                            }}
                        />
                        <br />
                        <p>自定义颜色</p>
                        <div style={{ display: 'flex' }}>
                            <div className="a act color theme1" style={{ background: '#47acff' }} onClick="$('div.app-color>div>input.theme1inp')[0].click();" />
                            <input type="color" className="theme1inp" onChange="$('div.app-color>div>.color.theme1').css('background-color',this.value);" defaultValue="#47acff" />
                            <div
                                style={{
                                    width: 10,
                                    height: 1,
                                    backgroundColor: 'var(--text)',
                                    margin: '17px 5px 0 10px'
                                }}
                            ></div>
                            <div className="a act color theme2" style={{ background: '#1168ae' }} onClick="$('div.app-color>div>input.theme2inp')[0].click();" />
                            <input type="color" className="theme2inp" onChange="$('div.app-color>div>.color.theme2').css('background-color',this.value);" defaultValue="#1168ae" />
                            <a
                                className="a button"
                                style={{ marginLeft: 20 }}
                                onClick="$(':root').css('--theme-1',$('div.app-color>div>input.theme1inp').val());
									$(':root').css('--theme-2',$('div.app-color>div>input.theme2inp').val());setData('color1',$('div.app-color>div>input.theme1inp').val());
									setData('color2',$('div.app-color>div>input.theme2inp').val())"
                            >
                                应用
                            </a>
                        </div>
                    </SettingsDropdown>
                    <SettingOption
                        icon={<SettingsIcon glyph="" />}
                        title="主题"
                        description="设置 Windows 的主题"
                        type="expand"
                        onClick={() => {
                            setShowTheme(!showTheme);
                        }}
                    />
                    <SettingsDropdown className="theme" show={showTheme}>
                        <SpinInfinite color="#2983cc" background="#7f7f7f50"></SpinInfinite>
                    </SettingsDropdown>
                    <SettingOption
                        icon={<SettingsIcon glyph="" />}
                        title="圆角"
                        description="设置系统界面中是否启用圆角"
                        type="check"
                        onCheck={() => {
                            context.set('borderRadius', !context.get('borderRadius'));
                        }}
                        checked={context.get('borderRadius')}
                    />
                    <SettingOption
                        icon={<SettingsIcon glyph="" />}
                        title="动画"
                        description="系统界面元素过渡动画"
                        type="check"
                        onCheck={() => {
                            context.set('animation', !context.get('animation'));
                        }}
                        checked={context.get('animation')}
                    />
                    <SettingOption
                        icon={<SettingsIcon glyph="" />}
                        title="阴影"
                        description="为系统界面元素添加阴影效果"
                        type="check"
                        onCheck={() => {
                            context.set('shadow', !context.get('shadow'));
                        }}
                        checked={context.get('shadow')}
                    />
                    <SettingOption
                        icon={<SettingsIcon glyph="" />}
                        title="多窗口透明"
                        description="为所有窗口开启透明效果，而不是仅用于焦点窗口"
                        type="check"
                        onCheck={() => {
                            context.set('multiTransparent', !context.get('multiTransparent'));
                        }}
                        checked={context.get('multiTransparent')}
                    />
                    <SettingOption
                        icon={<SettingsIcon glyph="" />}
                        title="开机音乐"
                        description="是否启用开机音乐"
                        type="check"
                        onCheck={() => {
                            context.set('enableBootMusic', !context.get('enableBootMusic'));
                        }}
                        checked={context.get('enableBootMusic')}
                    />
                </div>
                <div className="cnt apps">
                    <SettingsTitle>应用</SettingsTitle>
                    <SettingOption icon={<SettingsIcon glyph="" />} title="应用程序和功能" description="已安装的应用程序、应用程序执行别名" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="默认应用程序" description="文件和链接类型的默认值，其他默认值" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="默认应用程序" description="下载、存储位置、地图更新" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="可选内容" description="为您的设备提供额外功能" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="网站应用程序" description="可以在应用程序而不是浏览器中打开的网站" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="视频" description="视频格式调整、HDR 流媒体、电池选项" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="启动项" description="登录时自动启动的应用程序" type="more" />
                </div>
                <div className="cnt user">
                    <SettingsTitle>账户</SettingsTitle>
                    <div style={{ display: 'flex' }}>
                        <a className="a user" style={{ display: 'flex' }}>
                            <img src="/icons/apps/settings/user.svg" className="user-head" />
                            <div style={{ marginTop: 5 }}>
                                <p>瓶盖</p>
                                <p>tanjingyuan@Windows12.com</p>
                            </div>
                        </a>
                    </div>
                    <SettingOption icon={<SettingsIcon glyph="" />} title="您的微软账户" description="订阅、账单等" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="您的账户信息" description="电子邮件、日历和联系人使用的帐户" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="登陆选项" description="Windows Hello、安全密钥、密码、动态锁" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="电子邮件和账户" description="电子邮件、日历和联系人使用的帐户" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="电子邮件和账户" description="电子邮件、日历和联系人使用的帐户" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="家庭" description="管理您的家庭群组、编辑帐户类型和设备权限" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="Windows 备份" description="备份您的文件、应用程序、首选项以跨设备恢复它们" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="其他用户" description="设备访问、工作或学校用户、信息亭分配的访问" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="访问工作或学校账户" description="电子邮件、应用程序和网络等组织资源" type="more" />
                </div>
                <div className="cnt time">
                    <SettingsTitle>时间和语言</SettingsTitle>
                    <div className="settingTimeItem">
                        <p className="settingTimeTitle">当前设备时间：{context.get('time')}</p>
                    </div>
                    <SettingOption icon={<SettingsIcon glyph="" />} title="日期与时间" description="时区、自动时钟设置、日历显示" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="语言和地区" description="Windows 和某些应用程序根据您所在的地区设置日期和时间的格式" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="输入" description="触摸键盘、文本建议、首选项" type="more" />
                    <SettingOption icon={<SettingsIcon glyph="" />} title="朗读与音频输入" description="语音语言、语音识别麦克风设置、声音" type="more" />
                    <SettingOption
                        icon={<SettingsIcon glyph="" />}
                        title="Windows 显示语言"
                        description="设置和文件资源管理器等 Windows 功能将以这种语言显示"
                        type="custom"
                        elt={
                            <select>
                                <option value="en">English</option>
                                <option value="es">Español (Spanish)</option>
                                <option value="fr">Français (French)</option>
                                <option value="de">Deutsch (German)</option>
                                <option value="zh" selected="">
                                    中文 (Chinese)
                                </option>
                                <option value="ja">日本語 (Japanese)</option>
                                <option value="ko">한국어 (Korean)</option>
                                <option value="ar">العربية (Arabic)</option>
                                <option value="ru">Русский (Russian)</option>
                                <option value="pt">Português (Portuguese)</option>
                                <option value="it">Italiano (Italian)</option>
                                <option value="nl">Nederlands (Dutch)</option>
                                <option value="hi">हिन्दी (Hindi)</option>
                                <option value="sv">Svenska (Swedish)</option>
                                <option value="fi">Suomi (Finnish)</option>
                                <option value="da">Dansk (Danish)</option>
                                <option value="no">Norsk (Norwegian)</option>
                                <option value="tr">Türkçe (Turkish)</option>
                                <option value="pl">Polski (Polish)</option>
                                <option value="th">ภาษาไทย (Thai)</option>
                            </select>
                        }
                    />
                </div>
                <div className="cnt safe">
                    <SettingsTitle>隐私和安全性</SettingsTitle>
                    <div className="setting-list">
                        <SettingOption icon={<SettingsIcon glyph="" />} title="朗读与音频输入" description="语音语言、语音识别麦克风设置、声音" type="more" />
                        <SettingOption icon={<SettingsIcon glyph="" />} title="清除桌面图标" description="这将清除用户自定义的所有图标" type="more" />
                    </div>
                </div>
                <div className="cnt update">
                    <SettingsTitle>Windows 更新</SettingsTitle>
                    <div className="lo">
                        <img src="/icons/apps/settings/update.svg" />
                        <div className="update-main">
                            <div className="part">
                                <p className="notice">正在检查更新...</p>
                                <p className="detail" />
                            </div>
                            <div>
                                <a className="a button" style={{ fontSize: 16, marginTop: '-7.5px' }} onClick="apps.setting.checkUpdate()">
                                    检查更新
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="setting-list">
                        <SettingOption icon={<SettingsIcon glyph="" />} title="正在检查更新..." type="more" />
                        {/* <a className="a button" style={{ fontSize: 16, marginTop: '-7.5px' }} onClick="sendToSw({ head: 'update' }); localStorage.setItem('update', true); shownotice('setting.update')"> */}
                        <SettingOption icon={<SettingsIcon glyph="" />} title="历史版本" description="查看历史版本功能" type="more" />
                        {/* <a onClick="openapp('about');$('#win-about>.update').addClass('show');$('#win-about>.about').removeClass('show');"> */}
                        <SettingOption icon={<SettingsIcon glyph="" />} title="下载完整内容" description="当更新或系统出现问题，使用此项下载最新完整内容" type="more" />
                        {/* <a onClick="sendToSw({ head: 'update',force:true })"> */}
                        <SettingOption icon={<SettingsIcon glyph="" />} title="自动更新" description="设置是否启用自动更新" type="check" />
                        {/* <a className="checkbox checked a" onClick="$(this).toggleClass('checked'); autoUpdate = !autoUpdate; localStorage.setItem('autoUpdate', autoUpdate)" /> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings;
