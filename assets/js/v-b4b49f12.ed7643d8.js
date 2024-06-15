"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[86800],{312382:(e,t,o)=>{o.r(t),o.d(t,{data:()=>u});const u=JSON.parse('{"key":"v-b4b49f12","path":"/devices/WZ5_rgbw.html","title":"Skydance WZ5_rgbw control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Skydance WZ5_rgbw control via MQTT","description":"Integrate your Skydance WZ5_rgbw via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-01-31T17:42:44.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"White brightness (numeric)","slug":"white-brightness-numeric","link":"#white-brightness-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1718439202000},"filePathRelative":"devices/WZ5_rgbw.md"}')},570914:(e,t,o)=>{o.r(t),o.d(t,{default:()=>q});var u=o(166252);const i=(0,u._)("h1",{id:"skydance-wz5-rgbw",tabindex:"-1"},[(0,u._)("a",{class:"header-anchor",href:"#skydance-wz5-rgbw","aria-hidden":"true"},"#"),(0,u.Uk)(" Skydance WZ5_rgbw")],-1),d=(0,u._)("thead",null,[(0,u._)("tr",null,[(0,u._)("th"),(0,u._)("th")])],-1),s=(0,u._)("tr",null,[(0,u._)("td",null,"Model"),(0,u._)("td",null,"WZ5_rgbw")],-1),l=(0,u._)("td",null,"Vendor",-1),c=(0,u._)("tr",null,[(0,u._)("td",null,"Description"),(0,u._)("td",null,"Zigbee & RF 5 in 1 LED controller (RGBW mode)")],-1),a=(0,u._)("tr",null,[(0,u._)("td",null,"Exposes"),(0,u._)("td",null,"light (state, brightness, color_hs), white_brightness, linkquality")],-1),n=(0,u._)("tr",null,[(0,u._)("td",null,"Picture"),(0,u._)("td",null,[(0,u._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WZ5_rgbw.png",alt:"Skydance WZ5_rgbw"})])],-1),r=(0,u.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_hs</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_hs</code>: To control the hue/saturation (color) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;hue&quot;: HUE, &quot;saturation&quot;: SATURATION}}</code> (e.g. <code>{&quot;color&quot;:{&quot;hue&quot;:360,&quot;saturation&quot;:100}}</code>). To read the hue/saturation send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;hue&quot;:&quot;&quot;,&quot;saturation&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the hue/saturation via: <ul><li>HSB space (hue, saturation, brightness): <code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;b&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsb&quot;: &quot;H,S,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsb&quot;:&quot;360,100,100&quot;}}</code></li><li>HSV space (hue, saturation, value):<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;v&quot;: V}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;v&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsv&quot;: &quot;H,S,V&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsv&quot;:&quot;360,100,100&quot;}}</code></li><li>HSL space (hue, saturation, lightness)<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;l&quot;: L}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;l&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsl&quot;: &quot;H,S,L&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsl&quot;:&quot;360,100,100&quot;}}</code></li></ul></li></ul><h3 id="white-brightness-numeric" tabindex="-1"><a class="header-anchor" href="#white-brightness-numeric" aria-hidden="true">#</a> White brightness (numeric)</h3><p>White brightness of this light. Value can be found in the published state on the <code>white_brightness</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;white_brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>254</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),h={},q=(0,o(983744).Z)(h,[["render",function(e,t){const o=(0,u.up)("RouterLink");return(0,u.wg)(),(0,u.iD)("div",null,[(0,u.kq)(" !!!! "),(0,u.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,u.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,u.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,u.kq)(" !!!! "),i,(0,u._)("table",null,[d,(0,u._)("tbody",null,[s,(0,u._)("tr",null,[l,(0,u._)("td",null,[(0,u.Wm)(o,{to:"/supported-devices/#v=Skydance"},{default:(0,u.w5)((()=>[(0,u.Uk)("Skydance")])),_:1})])]),c,a,n])]),(0,u.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,u.kq)(" Notes END: Do not edit below this line "),r])}]])}}]);