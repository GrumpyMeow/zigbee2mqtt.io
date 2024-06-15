"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[71461],{14368:(e,t,d)=>{d.r(t),d.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-ad7aa6c2","path":"/devices/E2123.html","title":"IKEA E2123 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E2123 control via MQTT","description":"Integrate your IKEA E2123 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-03-24T20:00:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Button -> action mapping","slug":"button-action-mapping","link":"#button-action-mapping","children":[]},{"level":3,"title":"Notes on firmware 1.0.32 (20221219)","slug":"notes-on-firmware-1-0-32-20221219","link":"#notes-on-firmware-1-0-32-20221219","children":[]},{"level":3,"title":"Notes on firmware 1.0.35 (20230308)","slug":"notes-on-firmware-1-0-35-20230308","link":"#notes-on-firmware-1-0-35-20230308","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1718439202000},"filePathRelative":"devices/E2123.md"}')},845884:(e,t,d)=>{d.r(t),d.d(t,{default:()=>g});var o=d(166252);const i=(0,o._)("h1",{id:"ikea-e2123",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ikea-e2123","aria-hidden":"true"},"#"),(0,o.Uk)(" IKEA E2123")],-1),l=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),a=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"E2123")],-1),s=(0,o._)("td",null,"Vendor",-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"SYMFONISK sound remote, gen 2")],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"identify, battery, voltage, action, linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E2123.png",alt:"IKEA E2123"})])],-1),c=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the sensor to Zigbee2MQTT by quickly pressing the pair button 4x to get it connected.</p><h3 id="button-action-mapping" tabindex="-1"><a class="header-anchor" href="#button-action-mapping" aria-hidden="true">#</a> Button -&gt; <code>action</code> mapping</h3><table><thead><tr><th>Icon</th><th>Action</th><th>Exposed Action (firmware 1.0.012 (20211214))</th><th>Exposed Action (firmware 1.0.32 (20221219))</th><th>Exposed Action (firmware 1.0.35 (20230308))</th></tr></thead><tbody><tr><td>Play</td><td>press</td><td>toggle</td><td>toggle</td><td>play_pause</td></tr><tr><td>Next Track</td><td>press</td><td>track_next</td><td>track_next</td><td>track_next</td></tr><tr><td>Previous Track</td><td>press</td><td>track_previous</td><td>track_previous</td><td>track_previous</td></tr><tr><td>+ (Volume up)</td><td>press</td><td>volume_up</td><td>volume_up</td><td>volume_up</td></tr><tr><td>+ (Volume up)</td><td>hold</td><td>volume_up_hold</td><td>volume_up_hold</td><td>volume_up_hold</td></tr><tr><td>- (Volume down)</td><td>press</td><td>volume_down</td><td>volume_down</td><td>volume_down</td></tr><tr><td>- (Volume down)</td><td>hold</td><td>volume_down_hold</td><td>volume_down_hold</td><td>volume_down_hold</td></tr><tr><td>-----</td><td>-----</td><td>-----</td><td>-----</td><td>-----</td></tr><tr><td>Dot 1</td><td>press</td><td>dots_1_initial_press</td><td>dots_1_initial_press</td><td>dots_1_initial_press</td></tr><tr><td>Dot 1</td><td>press release</td><td></td><td>dots_1_short_release</td><td>dots_1_short_release</td></tr><tr><td>Dot 1</td><td>double press</td><td>dots_1_double_press</td><td>dots_1_double_press</td><td>dots_1_double_press</td></tr><tr><td>Dot 1</td><td>hold</td><td>dots_1_long_press</td><td>dots_1_long_press</td><td>dots_1_long_press</td></tr><tr><td>Dot 1</td><td>hold release</td><td></td><td>dots_1_long_release</td><td>dots_1_long_release</td></tr><tr><td>-----</td><td>-----</td><td>-----</td><td>-----</td><td>-----</td></tr><tr><td>Dot 2</td><td>press</td><td>dots_2_initial_press</td><td>dots_2_initial_press</td><td>dots_2_initial_press</td></tr><tr><td>Dot 2</td><td>press release</td><td></td><td>dots_2_short_release</td><td>dots_2_short_release</td></tr><tr><td>Dot 2</td><td>double press</td><td>dots_2_double_press</td><td>dots_2_double_press</td><td>dots_2_double_press</td></tr><tr><td>Dot 2</td><td>hold</td><td>dots_2_long_press</td><td>dots_2_long_press</td><td>dots_2_long_press</td></tr><tr><td>Dot 2</td><td>hold release</td><td></td><td>dots_2_long_release</td><td>dots_2_long_release</td></tr></tbody></table><h3 id="notes-on-firmware-1-0-32-20221219" tabindex="-1"><a class="header-anchor" href="#notes-on-firmware-1-0-32-20221219" aria-hidden="true">#</a> Notes on firmware 1.0.32 (20221219)</h3><ul><li>After updating the remote from <code>1.0.012 (20211214)</code> you may need to reconfigure or repair the device.</li><li>Dot single press triggers multiple actions: <ul><li><code>dot_&lt;1|2&gt;_initial_press</code></li><li><code>dot_&lt;1|2&gt;_short_release</code></li></ul></li><li>Dot double press triggers multiple actions: <ul><li><code>dot_&lt;1|2&gt;_initial_press</code></li><li><code>dot_&lt;1|2&gt;_double_press</code></li></ul></li><li>Press &amp; hold triggers multiple actions: <ul><li><code>dot_&lt;1|2&gt;_initial_press</code></li><li><code>dot_&lt;1|2&gt;_long_press</code></li><li><code>dot_&lt;1|2&gt;_long_release</code></li></ul></li></ul><h3 id="notes-on-firmware-1-0-35-20230308" tabindex="-1"><a class="header-anchor" href="#notes-on-firmware-1-0-35-20230308" aria-hidden="true">#</a> Notes on firmware 1.0.35 (20230308)</h3><ul><li>Dot single press, Dot double press and Press &amp; hold trigger multiple actions like in 1.0.35.</li><li>If the Dots buttons do not work after the update, you need to remove and re-pair your device.</li></ul>',9),h=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),_=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),p=(0,o.uE)('<ul><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum" aria-hidden="true">#</a> Identify (enum)</h3><p>Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>toggle</code>, <code>track_previous</code>, <code>track_next</code>, <code>volume_up</code>, <code>volume_down</code>, <code>volume_up_hold</code>, <code>volume_down_hold</code>, <code>dots_1_initial_press</code>, <code>dots_1_long_press</code>, <code>dots_1_short_release</code>, <code>dots_1_long_release</code>, <code>dots_1_double_press</code>, <code>dots_2_initial_press</code>, <code>dots_2_long_press</code>, <code>dots_2_short_release</code>, <code>dots_2_long_release</code>, <code>dots_2_double_press</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),m={},g=(0,d(983744).Z)(m,[["render",function(e,t){const d=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),i,(0,o._)("table",null,[l,(0,o._)("tbody",null,[a,(0,o._)("tr",null,[s,(0,o._)("td",null,[(0,o.Wm)(d,{to:"/supported-devices/#v=IKEA"},{default:(0,o.w5)((()=>[(0,o.Uk)("IKEA")])),_:1})])]),r,n,u])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,(0,o.kq)(" Notes END: Do not edit below this line "),h,(0,o._)("p",null,[(0,o.Uk)("This device supports OTA updates, for more information see "),(0,o.Wm)(d,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("OTA updates")])),_:1}),(0,o.Uk)(".")]),_,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(d,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);