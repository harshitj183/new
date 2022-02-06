;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="dabc861090706dca119026497e0b496a";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["L2eqSytChIMf"]={appId:"nt4L5NPJq1za",scope:{}};;CloudflareApps.installs["L2eqSytChIMf"].options={"blocks":[{"code":"\u003c!--[ install button ]--\u003e\n\n\u003cstyle\u003e/* install app */\n\n\n.addhome{left:0;right:0;margin: 10px;text-align: center; color: yellow;background: #007cff;border: 1px solid #007fa0;padding: 5px 19px;cursor: pointer;font-size: 14px;border-radius: 10px;}\n\n.addhome:hover{color: red;background: #152536; }\n\n--\u0026gt;\u003c/style\u003e\n\u003cscript\u003e/*\u003c![CDATA[*/ \n\n  const installButton = document.getElementById(\"dov_bloger\");window.addEventListener(\"beforeinstallprompt\", e =\u003e {e.preventDefault();deferredPrompt = e;installButton.hidden = false;installButton.addEventListener(\"click\", installApp);});function installApp() {deferredPrompt.prompt();installButton.disabled = true;deferredPrompt.userChoice.then(choiceResult =\u003e {if (choiceResult.outcome === \"accepted\") {installButton.hidden = true;} else {}installButton.disabled = false;deferredPrompt = null;});}window.addEventListener(\"appinstalled\", evt =\u003e {console.log(\"appinstalled fired\", evt);});\n\n  /*]]\u003e*/\u003c/script\u003e\n\n\u003c!--[ install button ]--\u003e","location":{"method":"append","selector":"body"}},{"code":"\u003cscript async='async' src='https://cdn.statically.io/js/platform.foremedia.net/code/11128/analytics' type='text/javascript'\u003e\u003c/script\u003e\n\n\u003cscript src='https://cdn.statically.io/js/MomentJS.com/downloads/moment.min.js' type='text/JavaScript'\u003e\u003c/script\u003e\n\u003cscript integrity='sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw' src='https://cdn.statically.io/js/instant.page/5.1.0' type='module'\u003e\u003c/script\u003e\n\u003cscript src='https://cdn.statically.io/js/cdnjs.cloudflare.com/ajax/libs/quicklink/2.2.0/quicklink.umd.min.js'\u003e\u003c/script\u003e\n\u003cscript\u003ewindow.addEventListener('load',()=\u003e{quicklink.listen();});\u003c/script\u003e\n\u003cscript src='https://cdn.statically.io/js/rawgit.com/AkewAvriyans/script/master/adsprotect.js' type='text/javascript'/\u003e","location":{"method":"append","selector":"body"}},{"code":"\u003cscript cache='true' crossorigin='anonymous' importance='high' src='https://cdn.statically.io/js/res.cloudinary.com/harshit-jaiswal/raw/upload/v1625978655/Theme_fi9xws.js'/\u003e","location":{"method":"append","selector":"head"}},{"code":"\u003cstyle\u003e\n\n      @keyframes lazy-kf{\n    from {opacity:0;}\n    to {opacity:1;}\n}\nspan[loading=lazy] {\n    animation: lazy-kf 5s;\n  img[loading=lazy] {\n\n    animation: lazy-kf 5s;\n}\n  div[class=separator] {\n\n    animation: lazy-kf 5s;\n\n}\n      \u003c/style\u003e\n\n\n\u003cscript async='async' cache='true' crossorigin='anonymous' defer='defer' importance='low' type='text/javascript'\u003e(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src=\"https://www.clarity.ms/tag/\"+i+\"?ref=gtm2\";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,\"clarity\",\"script\",\"9umzzljbtg\");\u003c/script\u003e\u003cdiv class='AT-ads jhfdiuh0' id='AT-ads'\u003e\n\u003cdiv class='AT-ads-close'\u003e\u003cbutton class='addhome' hidden='' id='dov_bloger'\u003eInstall Web App\u003c/button\u003e\u003c/div\u003e\n\u003cdiv class='AT-ads-content'\u003e\n\u003ca class='ads-here'\u003e\n\n\n\u003cscript src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'\u003egoogletag.pubads().definePassback('/25379366/22675005529',[[728,90],[300,100],[200,100]]).display();\u003c/script\u003e\n\n\u003c/a\u003e\u003c/div\u003e\u003c/div\u003e\n\u003cscript type='text/javascript'\u003evar prevScrollpos=window.pageYOffset;function hidenotice(){var currentScrollPos=window.pageYOffset;if(prevScrollpos\u003ecurrentScrollPos){document.getElementById(\"AT-ads\").style.bottom=\"-75px\"}else{document.getElementById(\"AT-ads\").style.bottom=\"0px\"}\nprevScrollpos=currentScrollPos}window.onscroll=function(){hidenotice()};\u003c/script\u003e\n\n\n\n\u003cdiv id='mobileB'\u003e\n\u003cscript src='//tags.orquideassp.com/tag/12199'\u003e\u003c/script\u003e\u003c/div\u003e\n\u003cstyle\u003e#mobileB{position:fixed;top:0;left:0;z-index:13;width:100%;height:50px}\u003c/style\u003e\n\n\n\n\n\n\n\u003cstyle\u003e#scroll-bar{position:fixed;top:0;left:0;width:0;height:6px;background-color:var(--submenu-bg);z-index:95;border:1px solid var(--submenu-color)}\u003c/style\u003e\n\u003cscript type='text/javascript'\u003evar block=['https://www.unlibot.com'];for(var b=block.length;b\u0026#8211;;){if(document.referrer.match(block[b]))\nwindow.location=\"https://google.com/\";}\u003c/script\u003e\n\n\n\u003cscript\u003e\n if (\u0026#39;serviceWorker\u0026#39; in navigator) {\n  window.addEventListener(\u0026#39;load\u0026#39;, function() {\n    navigator.serviceWorker.register(\u0026#39;/sw.js\u0026#39;);\n  });\n}\u003c/script\u003e\n\n\n\n\n\n\u003cscript async='async' cache='true' crossorigin='anonymous' defer='defer' type='text/javascript'\u003efunction setScrollBar(){let header=document.querySelector(\"header.header\"),style=header?getComputedStyle(header):{},hHeight=style.position==\"relative\"?header.offsetHeight:0,dHeight=document.documentElement.offsetHeight,footer=document.querySelector(\"footer.footer\"),fHeight=footer?footer.offsetHeight:0,width=((pageYOffset-hHeight)/(dHeight-hHeight-fHeight-innerHeight))*100;window.scrollBar=window.scrollBar||document.querySelector(\"#scroll-bar\");window.scrollBar.style.width=(width\u003c0?0:width)+\"%\"}document.addEventListener(\"scroll\",setScrollBar);window.addEventListener(\"resize\",setScrollBar);\u003c/script\u003e\u003cdiv id='scroll-bar'\u003e\u003c/div\u003e\n\u003cstyle type='text/css'\u003e* {cursor: url(https://res.cloudinary.com/harshit-jaiswal/image/upload/v1643619298/ezgif-5-d7e5b998ef_tlqxa5.png) url(https://res.cloudinary.com/harshit-jaiswal/image/upload/v1643619298/ezgif-5-d7e5b998ef_tlqxa5.png),, auto;}\u003c/style\u003e\n\u003cscript type='text/javascript'\u003efunction script(b){var c=document.createElement(\"script\");c.type=\"text/javascript\";c.async=true;c.src=b;var a=document.getElementsByTagName(\"head\")[0];a.appendChild(c)}\u003c/script\u003e\n\u003cscript type='text/javascript'\u003e\nvar block= ['https:for (var b= block.length; b\u0026#8211;;){if(document.referrer.match (block [b]))window.location= \"https:}\n\u003c/script\u003e","location":{"method":"append","selector":"body"}}]};;CloudflareApps.installs["L2eqSytChIMf"].selectors={"blocks[0].location.selector":"body","blocks[1].location.selector":"body","blocks[2].location.selector":"head","blocks[3].location.selector":"body"};;CloudflareApps.installs["WLPF03QjiZG8"]={appId:"nt-Bi-i48fAx",scope:{}};;CloudflareApps.installs["WLPF03QjiZG8"].options={"location":"article"};;CloudflareApps.installs["WLPF03QjiZG8"].selectors={"location":"article"};;CloudflareApps.installs["YIy70Mb0T24C"]={appId:"xHj1ehSJR69D",scope:{}};;CloudflareApps.installs["YIy70Mb0T24C"].options={"account":{"accountId":"g4u7SpWdldIY","service":"33x-oauth-production","userId":"aYBN7eFBar7kicrkHcnlKl"}};;CloudflareApps.installs["mEiJKbGKuCt5"]={appId:"Ek_0U0d0YWhZ",scope:{}};;CloudflareApps.installs["mEiJKbGKuCt5"].options={};;CloudflareApps.installs["v3VchZ1NisyE"]={appId:"5WU-5JC_CQYe",scope:{}};;CloudflareApps.installs["v3VchZ1NisyE"].options={"cloudname":"harshitj183"};;CloudflareApps.installs["v3VchZ1NisyE"].product={"id":"image4io"};;if(CloudflareApps.matchPage(CloudflareApps.installs['v3VchZ1NisyE'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['v3VchZ1NisyE'].options;var initialized=false;function mainFetchUrl(){var origin=new URL(window.location.origin);var protocol='';if(origin.protocol!='https:'){protocol='http://';}
else{protocol='https://';}
var fetch=new URL(protocol+'cdn.image4.io/'+options.cloudname+'/fetch/f_auto/');return fetch;}
function imageUrl(src){var absoluteRegex=new RegExp('^(?:[a-z]+:)?\/\/.*\.(jpg|png|jpeg|webp)$','i');var relativeRegex=new RegExp('^(?:[\.]{0,2})?\/{0,2}.*\.(jpg|png|jpeg|webp)$','i');if(absoluteRegex.test(src)){return new URL(src);}
else if(relativeRegex.test(src)){var url=new URL(src,new URL(window.location.origin));return url;}}
function updateElements(){if(options&&options.cloudname){var imgs=document.getElementsByTagName("img");var fetch=mainFetchUrl();for(var i=0;i<imgs.length;i++){if(imgs[i].dataset.src){var url=imageUrl(imgs[i].dataset.src);imgs[i].src=fetch.href+url.href;}}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){if(initialized==false){initialized=true;updateElements();}})}else{updateElements()}
window.CloudflareApps.installs['v3VchZ1NisyE'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['L2eqSytChIMf'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['L2eqSytChIMf'].options
var elements={}
var prevElements={}
var initialized=false;function updateElements(){options.blocks.forEach(function(block,index){var locationHash=[block.location.selector,block.location.method,index].join('!')
var element
if(elements[locationHash]){element=elements[locationHash]}else{if(block.location.method==='replace'){prevElements[locationHash]=document.querySelector(block.location.selector)}
element=CloudflareApps.createElement(block.location)
elements[locationHash]=element}
element.foundInBlocks=true
element.innerHTML=block.code
var scripts=Array.prototype.slice.call(element.querySelectorAll('script'))
if(scripts){scripts.forEach(function(script){var newScript=document.createElement('script')
for(var key=script.attributes.length;key--;){var attr=script.attributes[key]
if(attr.specified){newScript.setAttribute(attr.name,attr.value)}}
newScript.innerHTML=script.innerHTML
element.replaceChild(newScript,script)})}})
for(var hash in elements){if(!elements[hash].foundInBlocks){if(prevElements[hash]){elements[hash].parentNode.replaceChild(prevElements[hash],elements[hash])
delete prevElements[hash]}else{elements[hash].parentNode.removeChild(elements[hash])}
delete elements[hash]}else{delete elements[hash].foundInBlocks}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){if(initialized==false){initialized=true;updateElements();}})}else{updateElements()}
window.CloudflareApps.installs['L2eqSytChIMf'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['WLPF03QjiZG8'].URLPatterns)){(function(){var PHI,backgroundPositionYCache,calculateBaselineYRatio,calculateTextHighestY,calculateTypeMetrics,clearCanvas,containerIdAttrName,containsAnyNonInlineElements,containsInvalidElements,countParentContainers,destroy,fontAvailable,getBackgroundColor,getBackgroundColorNode,getFirstAvailableFont,getLinkColor,getUnderlineBackgroundPositionY,hasValidLinkContent,init,initLink,initLinkOnHover,isTransparent,isUnderlined,linkAlwysAttrName,linkBgPosAttrName,linkColorAttrName,linkContainers,linkHoverAttrName,linkLargeAttrName,linkSmallAttrName,performanceTimes,renderStyles,selectionColor,sortContainersForCSSPrecendence,styleNode,time,uniqueLinkContainerID;window.SmartUnderline={init:function(){},destroy:function(){}};if(!(window['getComputedStyle']&&document.documentElement.getAttribute)){return;}
PHI=1.618034;selectionColor='#b4d5fe';linkColorAttrName='data-smart-underline-link-color';linkSmallAttrName='data-smart-underline-link-small';linkLargeAttrName='data-smart-underline-link-large';linkAlwysAttrName='data-smart-underline-link-always';linkBgPosAttrName='data-smart-underline-link-background-position';linkHoverAttrName='data-smart-underline-link-hover';containerIdAttrName='data-smart-underline-container-id';performanceTimes=[];time=function(){return+(new Date);};linkContainers={};uniqueLinkContainerID=(function(){var id;id=0;return function(){return id+=1;};})();clearCanvas=function(canvas,context){return context.clearRect(0,0,canvas.width,canvas.height);};calculateTextHighestY=function(text,canvas,context){var alpha,highestY,i,j,pixelData,r,ref,ref1,textWidth,x,y;clearCanvas(canvas,context);context.fillStyle='red';textWidth=context.measureText(text).width;context.fillText(text,0,0);highestY=void 0;for(x=i=0,ref=textWidth;0<=ref?i<=ref:i>=ref;x=0<=ref?++i:--i){for(y=j=0,ref1=canvas.height;0<=ref1?j<=ref1:j>=ref1;y=0<=ref1?++j:--j){pixelData=context.getImageData(x,y,x+1,y+1);r=pixelData.data[0];alpha=pixelData.data[3];if(r===255&&alpha>50){if(!highestY){highestY=y;}
if(y>highestY){highestY=y;}}}}
clearCanvas(canvas,context);return highestY;};calculateTypeMetrics=function(computedStyle){var baselineY,canvas,context,descenderHeight,gLowestPixel;canvas=document.createElement('canvas');context=canvas.getContext('2d');canvas.height=canvas.width=2*parseInt(computedStyle.fontSize,10);context.textBaseline='top';context.textAlign='start';context.fontStretch=1;context.angle=0;context.font=computedStyle.fontVariant+" "+computedStyle.fontStyle+" "+computedStyle.fontWeight+" "+computedStyle.fontSize+"/"+computedStyle.lineHeight+" "+computedStyle.fontFamily;baselineY=calculateTextHighestY('I',canvas,context);gLowestPixel=calculateTextHighestY('g',canvas,context);descenderHeight=gLowestPixel-baselineY;return{baselineY:baselineY,descenderHeight:descenderHeight};};calculateBaselineYRatio=function(node){var baselinePositionY,baselineYRatio,height,large,largeRect,small,smallRect,test;test=document.createElement('div');test.style.display='block';test.style.position='absolute';test.style.bottom=0;test.style.right=0;test.style.width=0;test.style.height=0;test.style.margin=0;test.style.padding=0;test.style.visibility='hidden';test.style.overflow='hidden';test.style.wordWrap='normal';test.style.whiteSpace='nowrap';small=document.createElement('span');large=document.createElement('span');small.style.display='inline';large.style.display='inline';small.style.fontSize='0px';large.style.fontSize='2000px';small.innerHTML='X';large.innerHTML='X';test.appendChild(small);test.appendChild(large);node.appendChild(test);smallRect=small.getBoundingClientRect();largeRect=large.getBoundingClientRect();node.removeChild(test);baselinePositionY=smallRect.top-largeRect.top;height=largeRect.height;return baselineYRatio=Math.abs(baselinePositionY/height);};backgroundPositionYCache={};getFirstAvailableFont=function(fontFamily){var font,fonts,i,len;fonts=fontFamily.split(',');for(i=0,len=fonts.length;i<len;i++){font=fonts[i];if(fontAvailable(font)){return font;}}
return false;};fontAvailable=function(font){var baselineSize,canvas,context,newSize,text;canvas=document.createElement('canvas');context=canvas.getContext('2d');text='abcdefghijklmnopqrstuvwxyz0123456789';context.font='72px monospace';baselineSize=context.measureText(text).width;context.font="72px "+font+", monospace";newSize=context.measureText(text).width;if(newSize===baselineSize){return false;}
return true;};getUnderlineBackgroundPositionY=function(node){var adjustment,backgroundPositionY,backgroundPositionYPercent,baselineY,baselineYRatio,cache,cacheKey,clientRects,computedStyle,descenderHeight,descenderY,firstAvailableFont,fontSizeInt,minimumCloseness,ref,textHeight;computedStyle=getComputedStyle(node);firstAvailableFont=getFirstAvailableFont(computedStyle.fontFamily);if(!firstAvailableFont){cacheKey=""+(Math.random());}else{cacheKey="font:"+firstAvailableFont+"size:"+computedStyle.fontSize+"weight:"+computedStyle.fontWeight;}
cache=backgroundPositionYCache[cacheKey];if(cache){return cache;}
ref=calculateTypeMetrics(computedStyle),baselineY=ref.baselineY,descenderHeight=ref.descenderHeight;clientRects=node.getClientRects();if(!(clientRects!=null?clientRects.length:void 0)){return;}
adjustment=1;textHeight=clientRects[0].height-adjustment;if(-1<navigator.userAgent.toLowerCase().indexOf('firefox')){adjustment=.98;baselineYRatio=calculateBaselineYRatio(node);baselineY=baselineYRatio*textHeight*adjustment;}
descenderY=baselineY+descenderHeight;fontSizeInt=parseInt(computedStyle.fontSize,10);minimumCloseness=3;backgroundPositionY=baselineY+Math.max(minimumCloseness,descenderHeight/PHI);if(descenderHeight===4){backgroundPositionY=descenderY-1;}
if(descenderHeight===3){backgroundPositionY=descenderY;}
backgroundPositionYPercent=Math.round(100*backgroundPositionY/textHeight);if(descenderHeight>2&&fontSizeInt>10&&backgroundPositionYPercent<=100){backgroundPositionYCache[cacheKey]=backgroundPositionYPercent;return backgroundPositionYPercent;}};isTransparent=function(color){var alpha,rgbaAlphaMatch;if(color==='transparent'||color==='rgba(0, 0, 0, 0)'){return true;}
rgbaAlphaMatch=color.match(/^rgba\(.*,(.+)\)/i);if((rgbaAlphaMatch!=null?rgbaAlphaMatch.length:void 0)===2){alpha=parseFloat(rgbaAlphaMatch[1]);if(alpha<.0001){return true;}}
return false;};getBackgroundColorNode=function(node){var backgroundColor,computedStyle,parentNode,reachedRootNode;computedStyle=getComputedStyle(node);backgroundColor=computedStyle.backgroundColor;parentNode=node.parentNode;reachedRootNode=!parentNode||parentNode===document.documentElement||parentNode===node;if(computedStyle.backgroundImage!=='none'){return null;}
if(isTransparent(backgroundColor)){if(reachedRootNode){return node.parentNode||node;}else{return getBackgroundColorNode(parentNode);}}else{return node;}};hasValidLinkContent=function(node){return containsInvalidElements(node)||containsAnyNonInlineElements(node);};containsInvalidElements=function(node){var child,i,len,ref,ref1,ref2;ref=node.children;for(i=0,len=ref.length;i<len;i++){child=ref[i];if((ref1=(ref2=child.tagName)!=null?ref2.toLowerCase():void 0)==='img'||ref1==='video'||ref1==='canvas'||ref1==='embed'||ref1==='object'||ref1==='iframe'){return true;}
return containsInvalidElements(child);}
return false;};containsAnyNonInlineElements=function(node){var child,i,len,ref,style;ref=node.children;for(i=0,len=ref.length;i<len;i++){child=ref[i];style=getComputedStyle(child);if(style.display!=='inline'){return true;}
return containsAnyNonInlineElements(child);}
return false;};getBackgroundColor=function(node){var backgroundColor;backgroundColor=getComputedStyle(node).backgroundColor;if(node===document.documentElement&&isTransparent(backgroundColor)){return'rgb(255, 255, 255)';}else{return backgroundColor;}};getLinkColor=function(node){return getComputedStyle(node).color;};styleNode=document.createElement('style');countParentContainers=function(node,count){var parentNode,reachedRootNode;if(count==null){count=0;}
parentNode=node.parentNode;reachedRootNode=!parentNode||parentNode===document||parentNode===node;if(reachedRootNode){return count;}else{if(parentNode.hasAttribute(containerIdAttrName)){count+=1;}
return count+countParentContainers(parentNode);}};sortContainersForCSSPrecendence=function(containers){var container,id,sorted;sorted=[];for(id in containers){container=containers[id];container.depth=countParentContainers(container.container);sorted.push(container);}
sorted.sort(function(a,b){if(a.depth<b.depth){return-1;}
if(a.depth>b.depth){return 1;}
return 0;});return sorted;};isUnderlined=function(style){var i,len,property,ref,ref1;ref=['textDecorationLine','textDecoration'];for(i=0,len=ref.length;i<len;i++){property=ref[i];if((ref1=style[property])!=null?ref1.match(/\bunderline\b/):void 0){return true;}}
return false;};initLink=function(link){var backgroundPositionY,container,fontSize,id,style;style=getComputedStyle(link);fontSize=parseFloat(style.fontSize);if(isUnderlined(style)&&style.display==='inline'&&fontSize>=10&&!hasValidLinkContent(link)){container=getBackgroundColorNode(link);if(container){backgroundPositionY=getUnderlineBackgroundPositionY(link);if(backgroundPositionY){link.setAttribute(linkColorAttrName,getLinkColor(link));link.setAttribute(linkBgPosAttrName,backgroundPositionY);id=container.getAttribute(containerIdAttrName);if(id){linkContainers[id].links.push(link);}else{id=uniqueLinkContainerID();container.setAttribute(containerIdAttrName,id);linkContainers[id]={id:id,container:container,links:[link]};}
return true;}}}
return false;};renderStyles=function(){var backgroundColor,backgroundPositionY,color,container,containersWithPrecedence,i,j,len,len1,link,linkBackgroundPositionYs,linkColors,linkSelector,ref,styles;styles='';containersWithPrecedence=sortContainersForCSSPrecendence(linkContainers);linkBackgroundPositionYs={};for(i=0,len=containersWithPrecedence.length;i<len;i++){container=containersWithPrecedence[i];linkColors={};ref=container.links;for(j=0,len1=ref.length;j<len1;j++){link=ref[j];linkColors[getLinkColor(link)]=true;linkBackgroundPositionYs[getUnderlineBackgroundPositionY(link)]=true;}
backgroundColor=getBackgroundColor(container.container);for(color in linkColors){linkSelector=function(modifier){if(modifier==null){modifier='';}
return"["+containerIdAttrName+"=\""+container.id+"\"] a["+linkColorAttrName+"=\""+color+"\"]["+linkAlwysAttrName+"]"+modifier+",\n["+containerIdAttrName+"=\""+container.id+"\"] a["+linkColorAttrName+"=\""+color+"\"]["+linkHoverAttrName+"]"+modifier+":hover";};styles+=(linkSelector())+", "+(linkSelector(':visited'))+" {\n  color: "+color+";\n  text-decoration: none !important;\n  text-shadow: 0.03em 0 "+backgroundColor+", -0.03em 0 "+backgroundColor+", 0 0.03em "+backgroundColor+", 0 -0.03em "+backgroundColor+", 0.06em 0 "+backgroundColor+", -0.06em 0 "+backgroundColor+", 0.09em 0 "+backgroundColor+", -0.09em 0 "+backgroundColor+", 0.12em 0 "+backgroundColor+", -0.12em 0 "+backgroundColor+", 0.15em 0 "+backgroundColor+", -0.15em 0 "+backgroundColor+";\n  background-color: transparent;\n  background-image: -webkit-linear-gradient("+backgroundColor+", "+backgroundColor+"), -webkit-linear-gradient("+backgroundColor+", "+backgroundColor+"), -webkit-linear-gradient("+color+", "+color+");\n  background-image: -moz-linear-gradient("+backgroundColor+", "+backgroundColor+"), -moz-linear-gradient("+backgroundColor+", "+backgroundColor+"), -moz-linear-gradient("+color+", "+color+");\n  background-image: -o-linear-gradient("+backgroundColor+", "+backgroundColor+"), -o-linear-gradient("+backgroundColor+", "+backgroundColor+"), -o-linear-gradient("+color+", "+color+");\n  background-image: -ms-linear-gradient("+backgroundColor+", "+backgroundColor+"), -ms-linear-gradient("+backgroundColor+", "+backgroundColor+"), -ms-linear-gradient("+color+", "+color+");\n  background-image: linear-gradient("+backgroundColor+", "+backgroundColor+"), linear-gradient("+backgroundColor+", "+backgroundColor+"), linear-gradient("+color+", "+color+");\n  -webkit-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n  -moz-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n  background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n  background-repeat: no-repeat, no-repeat, repeat-x;\n}\n\n"+(linkSelector('::selection'))+" {\n  text-shadow: 0.03em 0 "+selectionColor+", -0.03em 0 "+selectionColor+", 0 0.03em "+selectionColor+", 0 -0.03em "+selectionColor+", 0.06em 0 "+selectionColor+", -0.06em 0 "+selectionColor+", 0.09em 0 "+selectionColor+", -0.09em 0 "+selectionColor+", 0.12em 0 "+selectionColor+", -0.12em 0 "+selectionColor+", 0.15em 0 "+selectionColor+", -0.15em 0 "+selectionColor+";\n  background: "+selectionColor+";\n}\n\n"+(linkSelector('::-moz-selection'))+" {\n  text-shadow: 0.03em 0 "+selectionColor+", -0.03em 0 "+selectionColor+", 0 0.03em "+selectionColor+", 0 -0.03em "+selectionColor+", 0.06em 0 "+selectionColor+", -0.06em 0 "+selectionColor+", 0.09em 0 "+selectionColor+", -0.09em 0 "+selectionColor+", 0.12em 0 "+selectionColor+", -0.12em 0 "+selectionColor+", 0.15em 0 "+selectionColor+", -0.15em 0 "+selectionColor+";\n  background: "+selectionColor+";\n}";}}
for(backgroundPositionY in linkBackgroundPositionYs){styles+="a["+linkBgPosAttrName+"=\""+backgroundPositionY+"\"] {\n  background-position: 0% "+backgroundPositionY+"%, 100% "+backgroundPositionY+"%, 0% "+backgroundPositionY+"%;\n}";}
return styleNode.innerHTML=styles;};initLinkOnHover=function(){var alreadyMadeSmart,link,madeSmart;link=this;alreadyMadeSmart=link.hasAttribute(linkHoverAttrName);if(!alreadyMadeSmart){madeSmart=initLink(link);if(madeSmart){link.setAttribute(linkHoverAttrName,'');return renderStyles();}}};init=function(options){var i,len,link,links,madeSmart,startTime;startTime=time();links=document.querySelectorAll((options.location?options.location+' ':'')+"a");if(!links.length){return;}
linkContainers={};for(i=0,len=links.length;i<len;i++){link=links[i];madeSmart=initLink(link);if(madeSmart){link.setAttribute(linkAlwysAttrName,'');}else{link.removeEventListener('mouseover',initLinkOnHover);link.addEventListener('mouseover',initLinkOnHover);}}
renderStyles();document.body.appendChild(styleNode);return performanceTimes.push(time()-startTime);};destroy=function(){var attribute,i,len,ref,ref1,results;if((ref=styleNode.parentNode)!=null){ref.removeChild(styleNode);}
Array.prototype.forEach.call(document.querySelectorAll("["+linkHoverAttrName+"]"),function(node){return node.removeEventListener(initLinkOnHover);});ref1=[linkColorAttrName,linkSmallAttrName,linkLargeAttrName,linkAlwysAttrName,linkHoverAttrName,containerIdAttrName];results=[];for(i=0,len=ref1.length;i<len;i++){attribute=ref1[i];results.push(Array.prototype.forEach.call(document.querySelectorAll("["+attribute+"]"),function(node){return node.removeAttribute(attribute);}));}
return results;};window.SmartUnderline={init:function(options){if(options==null){options={};}
if(document.readyState==='loading'){window.addEventListener('DOMContentLoaded',function(){return init(options);});return window.addEventListener('load',function(){destroy();return init(options);});}else{destroy();return init(options);}},destroy:function(){return destroy();},performanceTimes:function(){return performanceTimes;}};}).call(this);};if(CloudflareApps.matchPage(CloudflareApps.installs['WLPF03QjiZG8'].URLPatterns)){SmartUnderline.init(CloudflareApps.installs['WLPF03QjiZG8'].options)};if(CloudflareApps.matchPage(CloudflareApps.installs['mEiJKbGKuCt5'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])
return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0);})
([function(module,exports,__webpack_require__){module.exports=__webpack_require__(1);},function(module,exports,__webpack_require__){var cssPath=__webpack_require__(2);var asConstants=__webpack_require__(3);var storageAvailable=__webpack_require__(4);var lStorage=__webpack_require__(5);var getLocationParam=function(){return window.location.pathname;}
var shouldBackup=function(formElement){if(asConstants.excludedTypes.indexOf(formElement.type)!==-1){return false;}
for(var i=0;i<asConstants.regExps.length;i++){if(asConstants.regExps[i].test(formElement.name)){return false;}}
return true;}
var formBackedUp=[];var FormBackup=function(formElement){this.backupObject={};this.formElement=formElement;this.formPath=cssPath(formElement);formBackedUp.push(this.formPath);};FormBackup.prototype.setElemValue=function(elem,value){if(!elem.name){return false;}
this.backupObject[elem.name]=value;this.save();};FormBackup.prototype.save=function(){lStorage.setJSON(getLocationParam()+this.formPath,this.backupObject);}
FormBackup.prototype.restore=function(){var formParams=lStorage.getJSON(getLocationParam()+this.formPath);this.backupObject=formParams;for(var fieldName in formParams){var formValue=formParams[fieldName];var elem=document.getElementsByName(fieldName)[0];if(!elem.value){elem.value=formParams[fieldName];}}}
FormBackup.prototype.attachSubmitListener=function(){var me=this;this.formElement.addEventListener("submit",function(e){lStorage.clear(getLocationParam()+me.formPath);})}
FormBackup.prototype.attachInputListeners=function(){var formFields=document.querySelectorAll(this.formPath+' input,textarea');var formFieldsArr=[].slice.call(formFields);var me=this;formFieldsArr.forEach(function(field){if(!shouldBackup(field)){return;}
field.addEventListener("input",function(e){me.setElemValue(this,e.target.value);});});}
var bootstrap=function(){if(!storageAvailable("localStorage")){return false;}
var timerLength=100;var setFormBackup=function(){setTimeout(function(){for(var i=0;i<document.forms.length;i++){if(formBackedUp.indexOf(cssPath(document.forms[i]))!==-1){return false;};var formBackup=new FormBackup(document.forms[i]);formBackup.restore();formBackup.attachSubmitListener();formBackup.attachInputListeners();};timerLength*=2;setFormBackup();},timerLength);}
setFormBackup();};document.addEventListener("DOMContentLoaded",function(event){bootstrap();});if(document.readyState==="complete"){bootstrap();}},function(module,exports){var UTILS={};UTILS.cssPath=function(node,optimized)
{if(node.nodeType!==Node.ELEMENT_NODE)
return"";var steps=[];var contextNode=node;while(contextNode){var step=UTILS._cssPathStep(contextNode,!!optimized,contextNode===node);if(!step)
break;steps.push(step);if(step.optimized)
break;contextNode=contextNode.parentNode;}
steps.reverse();return steps.join(" > ");}
UTILS._cssPathStep=function(node,optimized,isTargetNode)
{if(node.nodeType!==Node.ELEMENT_NODE)
return null;var id=node.getAttribute("id");if(optimized){if(id)
return new UTILS.DOMNodePathStep(idSelector(id),true);var nodeNameLower=node.nodeName.toLowerCase();if(nodeNameLower==="body"||nodeNameLower==="head"||nodeNameLower==="html")
return new UTILS.DOMNodePathStep(node.nodeName.toLowerCase(),true);}
var nodeName=node.nodeName.toLowerCase();if(id)
return new UTILS.DOMNodePathStep(nodeName.toLowerCase()+idSelector(id),true);var parent=node.parentNode;if(!parent||parent.nodeType===Node.DOCUMENT_NODE)
return new UTILS.DOMNodePathStep(nodeName.toLowerCase(),true);function prefixedElementClassNames(node)
{var classAttribute=node.getAttribute("class");if(!classAttribute)
return[];return classAttribute.split(/\s+/g).filter(Boolean).map(function(name){return"$"+name;});}
function idSelector(id)
{return"#"+escapeIdentifierIfNeeded(id);}
function escapeIdentifierIfNeeded(ident)
{if(isCSSIdentifier(ident))
return ident;var shouldEscapeFirst=/^(?:[0-9]|-[0-9-]?)/.test(ident);var lastIndex=ident.length-1;return ident.replace(/./g,function(c,i){return((shouldEscapeFirst&&i===0)||!isCSSIdentChar(c))?escapeAsciiChar(c,i===lastIndex):c;});}
function escapeAsciiChar(c,isLast)
{return"\\"+toHexByte(c)+(isLast?"":" ");}
function toHexByte(c)
{var hexByte=c.charCodeAt(0).toString(16);if(hexByte.length===1)
hexByte="0"+hexByte;return hexByte;}
function isCSSIdentChar(c)
{if(/[a-zA-Z0-9_-]/.test(c))
return true;return c.charCodeAt(0)>=0xA0;}
function isCSSIdentifier(value)
{return/^-?[a-zA-Z_][a-zA-Z0-9_-]*$/.test(value);}
var prefixedOwnClassNamesArray=prefixedElementClassNames(node);var needsClassNames=false;var needsNthChild=false;var ownIndex=-1;var siblings=parent.children;for(var i=0;(ownIndex===-1||!needsNthChild)&&i<siblings.length;++i){var sibling=siblings[i];if(sibling===node){ownIndex=i;continue;}
if(needsNthChild)
continue;if(sibling.nodeName.toLowerCase()!==nodeName.toLowerCase())
continue;needsClassNames=true;var ownClassNames=prefixedOwnClassNamesArray;var ownClassNameCount=0;for(var name in ownClassNames)
++ownClassNameCount;if(ownClassNameCount===0){needsNthChild=true;continue;}
var siblingClassNamesArray=prefixedElementClassNames(sibling);for(var j=0;j<siblingClassNamesArray.length;++j){var siblingClass=siblingClassNamesArray[j];if(ownClassNames.indexOf(siblingClass))
continue;delete ownClassNames[siblingClass];if(!--ownClassNameCount){needsNthChild=true;break;}}}
var result=nodeName.toLowerCase();if(isTargetNode&&nodeName.toLowerCase()==="input"&&node.getAttribute("type")&&!node.getAttribute("id")&&!node.getAttribute("class"))
result+="[type=\""+node.getAttribute("type")+"\"]";if(needsNthChild){result+=":nth-child("+(ownIndex+1)+")";}else if(needsClassNames){for(var prefixedName in prefixedOwnClassNamesArray)
result+="."+escapeIdentifierIfNeeded(prefixedOwnClassNamesArray[prefixedName].substr(1));}
return new UTILS.DOMNodePathStep(result,false);}
UTILS.DOMNodePathStep=function(value,optimized)
{this.value=value;this.optimized=optimized||false;}
UTILS.DOMNodePathStep.prototype={toString:function()
{return this.value;}}
module.exports=UTILS.cssPath;},function(module,exports){var CC_NUM=/^((card|cc|acct).?(number|#|no|num)|nummer|credito|numero|número|numéro|カード番号|Номер.*карты|信用卡号|信用卡号码|信用卡卡號|카드)$/;var CC_CVV=/^(verification|card identification|security code|card code|cvn|cvv|cvc|csc|cvd|cid|ccv)$/;var CC_MON=/^(expir|exp.*mo|exp.*date|ccmonth|cardmonth|gueltig|gültig|monat|fecha|date.*exp|scadenza|有効期限|validade|Срок действия карты|月)$/;var CC_YEAR=/^(exp.?year|ablaufdatum|gueltig|gültig|yahr|fecha|scadenza|有効期限|validade|Срок действия карты|年|有效期)$/;var regExps=[CC_NUM,CC_CVV,CC_MON,CC_YEAR];var excludedTypes=["hidden","password","file","submit","reset","button","checkbox","radio"];module.exports={regExps,excludedTypes}},function(module,exports){module.exports=function storageAvailable(type){try{var storage=window[type],x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);return true;}
catch(e){return false;}}},function(module,exports){var lStorage={getJSON:function(key,placeholder){var value=localStorage.getItem(key);if(value){try{return JSON.parse(value);}catch(e){}}
return placeholder||{};},setJSON:function(key,value){localStorage.setItem(key,JSON.stringify(value))},clear:function(key){localStorage.removeItem(key);}}
module.exports=lStorage;}]);}(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/_uN0RKlrRUcIpli5OOuY6x2IMcY.js';document.head.appendChild(script);})();