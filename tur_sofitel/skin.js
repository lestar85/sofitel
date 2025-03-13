// Garden Gnome Software - Skin
// Pano2VR 7.1.8/20986
// Filename: feather_box.ggsk
// Generated 2025-03-01T22:57:34

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_thumbnails', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('open_image_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_info_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('opt_proj_title', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_info', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_maps', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_floorplans', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_share_facebook', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_twitter', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_copy', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('width_share_container', 1, 70.00, { ignoreInState: 1  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone_landscape', 2, false, { ignoreInState: 1  });
	player.addVariable('share_api', 2, false, { ignoreInState: 0  });
	player.addVariable('share_url', 0, "", { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_url_popup') == false)) && 
				((player.getVariableValue('vis_image_popup') == false)) && 
				((player.getVariableValue('vis_pdf_popup') == false)) && 
				((player.getVariableValue('vis_video_youtube_popup') == false)) && 
				((player.getVariableValue('vis_video_vimeo_popup') == false)) && 
				((player.getVariableValue('vis_video_file_popup') == false)) && 
				((player.getVariableValue('vis_video_url_popup') == false)) && 
				((player.getVariableValue('vis_phone_info') == false)) && 
				((player.getVariableValue('vis_phone_thumbs') == false)) && 
				((player.getVariableValue('vis_phone_map') == false)) && 
				((player.getVariableValue('vis_phone_floorplan') == false)) && 
				((player.getVariableValue('vis_phone_image') == false)) && 
				((player.getVariableValue('vis_phone_pdf') == false)) && 
				((player.getVariableValue('vis_phone_youtube') == false)) && 
				((player.getVariableValue('vis_phone_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_video_file') == false)) && 
				((player.getVariableValue('vis_phone_video_url') == false)) && 
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_opt_maps = {};
		me._variable_opt_maps.ggCurrentLogicState = -1;
		me._variable_opt_maps.logicBlock = function() {
			var newLogicState_opt_maps;
			if (
				((player.hasMap() == true))
			)
			{
				newLogicState_opt_maps = 0;
			}
			else {
				newLogicState_opt_maps = -1;
			}
			if (me._variable_opt_maps.ggCurrentLogicState != newLogicState_opt_maps) {
				me._variable_opt_maps.ggCurrentLogicState = newLogicState_opt_maps;
				if (me._variable_opt_maps.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_maps', true);
				}
				else {
					player.setVariableValue('opt_maps', false);
				}
			}
		}
		me._variable_opt_floorplans = {};
		me._variable_opt_floorplans.ggCurrentLogicState = -1;
		me._variable_opt_floorplans.logicBlock = function() {
			var newLogicState_opt_floorplans;
			if (
				((player.hasFloorplan() == true))
			)
			{
				newLogicState_opt_floorplans = 0;
			}
			else {
				newLogicState_opt_floorplans = -1;
			}
			if (me._variable_opt_floorplans.ggCurrentLogicState != newLogicState_opt_floorplans) {
				me._variable_opt_floorplans.ggCurrentLogicState = newLogicState_opt_floorplans;
				if (me._variable_opt_floorplans.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_floorplans', true);
				}
				else {
					player.setVariableValue('opt_floorplans', false);
				}
			}
		}
		me._variable_opt_share = {};
		me._variable_opt_share.ggCurrentLogicState = -1;
		me._variable_opt_share.logicBlock = function() {
			var newLogicState_opt_share;
			if (
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_twitter') == true)) || 
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicState_opt_share = 0;
			}
			else {
				newLogicState_opt_share = -1;
			}
			if (me._variable_opt_share.ggCurrentLogicState != newLogicState_opt_share) {
				me._variable_opt_share.ggCurrentLogicState = newLogicState_opt_share;
				if (me._variable_opt_share.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_share', true);
				}
				else {
					player.setVariableValue('opt_share', false);
				}
			}
		}
		me._variable_width_share_container = {};
		me._variable_width_share_container.ggCurrentLogicState = -1;
		me._variable_width_share_container.logicBlock = function() {
			var newConditionsTrue_width_share_container = [];
			var delta = 0;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTrue_width_share_container.push(0);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTrue_width_share_container.push(1);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newConditionsTrue_width_share_container.push(2);
			}
			if (
				((player.getVariableValue('opt_share_copy') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_copy') == true)) && 
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newConditionsTrue_width_share_container.push(3);
			}
			if (
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newConditionsTrue_width_share_container.push(4);
			}
			if (JSON.stringify(me._variable_width_share_container.ggConditionsTrue) != JSON.stringify(newConditionsTrue_width_share_container)) {
				me._variable_width_share_container.ggConditionsTrue = newConditionsTrue_width_share_container;
				if (me._variable_width_share_container.ggConditionsTrue.includes(0)) {
					delta += 38;
				}
				if (me._variable_width_share_container.ggConditionsTrue.includes(1)) {
					delta += 12;
				}
				if (me._variable_width_share_container.ggConditionsTrue.includes(2)) {
					delta += 38;
				}
				if (me._variable_width_share_container.ggConditionsTrue.includes(3)) {
					delta += 12;
				}
				if (me._variable_width_share_container.ggConditionsTrue.includes(4)) {
					delta += 38;
				}
				player.setVariableValue('width_share_container', 70.00 + delta);
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		me._variable_resp_phone_landscape = {};
		me._variable_resp_phone_landscape.ggCurrentLogicState = -1;
		me._variable_resp_phone_landscape.logicBlock = function() {
			var newLogicState_resp_phone_landscape;
			if (
				((player.getViewerSize(true).height <= 620))
			)
			{
				newLogicState_resp_phone_landscape = 0;
			}
			else {
				newLogicState_resp_phone_landscape = -1;
			}
			if (me._variable_resp_phone_landscape.ggCurrentLogicState != newLogicState_resp_phone_landscape) {
				me._variable_resp_phone_landscape.ggCurrentLogicState = newLogicState_resp_phone_landscape;
				if (me._variable_resp_phone_landscape.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_landscape', true);
				}
				else {
					player.setVariableValue('resp_phone_landscape', false);
				}
			}
		}
		el=me._button_container=document.createElement('div');
		el.ggId="button_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_container.style.transition='';
				if (me._button_container.ggCurrentLogicStateVisible == 0) {
					me._button_container.style.visibility="hidden";
					me._button_container.ggVisible=false;
				}
				else {
					me._button_container.style.visibility=(Number(me._button_container.style.opacity)>0||!me._button_container.style.opacity)?'inherit':'hidden';
					me._button_container.ggVisible=true;
				}
			}
		}
		me._button_container.logicBlock_visible();
		me._button_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_thumbnails=document.createElement('div');
		el.ggId="btn_thumbnails";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_thumbnails.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_thumbnails.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_thumbnails.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_thumbnails.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_thumbnails.style.transition='background-color 100ms ease 0ms';
				if (me._btn_thumbnails.ggCurrentLogicStateVisible == 0) {
					me._btn_thumbnails.style.visibility=(Number(me._btn_thumbnails.style.opacity)>0||!me._btn_thumbnails.style.opacity)?'inherit':'hidden';
					me._btn_thumbnails.ggVisible=true;
				}
				else {
					me._btn_thumbnails.style.visibility="hidden";
					me._btn_thumbnails.ggVisible=false;
				}
			}
		}
		me._btn_thumbnails.logicBlock_visible();
		me._btn_thumbnails.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_thumbnails'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_thumbnails.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_thumbnails.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_thumbnails.style.transition='background-color 100ms ease 0ms';
				if (me._btn_thumbnails.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_thumbnails.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_thumbnails.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_thumbnails.logicBlock_backgroundcolor();
		me._btn_thumbnails.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails', !player.getVariableValue('vis_thumbnails'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				me._node_cloner_phone.ggText="";
				me._node_cloner_phone.ggUpdate([]);
				skin.updateSize(skin.divSkin);
			}
		}
		me._btn_thumbnails.onmouseenter=function (e) {
			me.elementMouseOver['btn_thumbnails']=true;
			me._btn_thumbnails.logicBlock_backgroundcolor();
		}
		me._btn_thumbnails.onmouseleave=function (e) {
			me.elementMouseOver['btn_thumbnails']=false;
			me._btn_thumbnails.logicBlock_backgroundcolor();
		}
		me._btn_thumbnails.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_thumbnails_icon=document.createElement('div');
		els=me._btn_thumbnails_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxjaXJjbGUgc3Ryb2tlLW'+
			'9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2MyZTgxMiIgcj0iMS41IiBzdHJva2Utd2lkdGg9IjEuMjUiIGN4PSIxOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBjeT0iMTgiLz4KIDxjaXJjbGUgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2MyZTgxMiIgcj0iMS41IiBzdHJva2Utd2lkdGg9IjEuMjUiIGN4PSIyOC41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIGN5PSIxOCIvPgogPGNpcmNsZSBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIg'+
			'c3Ryb2tlPSIjYzJlODEyIiByPSIxLjUiIHN0cm9rZS13aWR0aD0iMS4yNSIgY3g9IjcuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBjeT0iMTgiLz4KPC9zdmc+Cg==';
		me._btn_thumbnails_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_thumbnails_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_thumbnails_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_thumbnails_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_thumbnails.appendChild(me._btn_thumbnails_icon);
		me._button_container.appendChild(me._btn_thumbnails);
		el=me._btn_fullscreen=document.createElement('div');
		el.ggId="btn_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_fullscreen.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._btn_fullscreen.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_fullscreen.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_fullscreen.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_fullscreen.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 70;
				}
					me._btn_fullscreen.style.right=(25+deltaX) + 'px';
					me._btn_fullscreen.style.bottom=(20+deltaY) + 'px';
			}
		}
		me._btn_fullscreen.logicBlock_position();
		me._btn_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen.style.visibility=(Number(me._btn_fullscreen.style.opacity)>0||!me._btn_fullscreen.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen.ggVisible=true;
				}
				else {
					me._btn_fullscreen.style.visibility="hidden";
					me._btn_fullscreen.ggVisible=false;
				}
			}
		}
		me._btn_fullscreen.logicBlock_visible();
		me._btn_fullscreen.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_fullscreen'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_fullscreen.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_fullscreen.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_fullscreen.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_fullscreen.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_fullscreen.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_fullscreen.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_fullscreen.logicBlock_backgroundcolor();
		me._btn_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._btn_fullscreen.onmouseenter=function (e) {
			me.elementMouseOver['btn_fullscreen']=true;
			me._btn_fullscreen.logicBlock_backgroundcolor();
		}
		me._btn_fullscreen.onmouseleave=function (e) {
			me.elementMouseOver['btn_fullscreen']=false;
			me._btn_fullscreen.logicBlock_backgroundcolor();
		}
		me._btn_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_fullscreen_exit=document.createElement('div');
		els=me._btn_fullscreen_exit__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5bGluZSBzdHJva2'+
			'U9IiNjMmU4MTIiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcG9pbnRzPSI2LDIxIDE1LDIxICYjeGE7JiN4OTsxNSwzMCAiLz4KIDxwb2x5bGluZSBzdHJva2U9IiNjMmU4MTIiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcG9pbnRzPSIzMCwxNSAyMSwxNSAmI3hhOyYjeDk7MjEsNiAiLz4KIDxsaW5lIHgyPSIzMS41IiBzdHJva2Ut'+
			'b3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgeDE9IjIxIiBzdHJva2U9IiNjMmU4MTIiIHkyPSI0LjUiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB5MT0iMTUiIGZpbGw9Im5vbmUiLz4KIDxsaW5lIHgyPSIxNSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHgxPSI0LjUiIHN0cm9rZT0iI2MyZTgxMiIgeTI9IjIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeTE9IjMxLjUiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg==';
		me._btn_fullscreen_exit__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_fullscreen_exit";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen_exit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_fullscreen_exit.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen_exit.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen_exit.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen_exit.style.transition='';
				if (me._btn_fullscreen_exit.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen_exit.style.visibility=(Number(me._btn_fullscreen_exit.style.opacity)>0||!me._btn_fullscreen_exit.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen_exit.ggVisible=true;
				}
				else {
					me._btn_fullscreen_exit.style.visibility="hidden";
					me._btn_fullscreen_exit.ggVisible=false;
				}
			}
		}
		me._btn_fullscreen_exit.logicBlock_visible();
		me._btn_fullscreen_exit.ggUpdatePosition=function (useTransition) {
		}
		me._btn_fullscreen.appendChild(me._btn_fullscreen_exit);
		el=me._btn_fullscreen_enter=document.createElement('div');
		els=me._btn_fullscreen_enter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5bGluZSBzdHJva2'+
			'U9IiNjMmU4MTIiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcG9pbnRzPSIyMi41LDQuNSAgIDMxLjUsNC41IDMxLjUsMTMuNSAiLz4KIDxwb2x5bGluZSBzdHJva2U9IiNjMmU4MTIiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcG9pbnRzPSIxMy41LDMxLjUgICA0LjUsMzEuNSA0LjUsMjIuNSAiLz4KIDxsaW5lIHgyPSIyMSIgc3Ry'+
			'b2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHgxPSIzMS41IiBzdHJva2U9IiNjMmU4MTIiIHkyPSIxNSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHkxPSI0LjUiIGZpbGw9Im5vbmUiLz4KIDxsaW5lIHgyPSIxNSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHgxPSI0LjUiIHN0cm9rZT0iI2MyZTgxMiIgeTI9IjIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeTE9IjMxLjUiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg==';
		me._btn_fullscreen_enter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_fullscreen_enter";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen_enter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_fullscreen_enter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen_enter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen_enter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen_enter.style.transition='';
				if (me._btn_fullscreen_enter.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen_enter.style.visibility="hidden";
					me._btn_fullscreen_enter.ggVisible=false;
				}
				else {
					me._btn_fullscreen_enter.style.visibility=(Number(me._btn_fullscreen_enter.style.opacity)>0||!me._btn_fullscreen_enter.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen_enter.ggVisible=true;
				}
			}
		}
		me._btn_fullscreen_enter.logicBlock_visible();
		me._btn_fullscreen_enter.ggUpdatePosition=function (useTransition) {
		}
		me._btn_fullscreen.appendChild(me._btn_fullscreen_enter);
		me._button_container.appendChild(me._btn_fullscreen);
		el=me._btn_languages=document.createElement('div');
		el.ggId="btn_languages";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_languages.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_languages.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (JSON.stringify(me._btn_languages.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_languages.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_languages.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_languages.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_languages.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 70;
				}
					me._btn_languages.style.right=(25+deltaX) + 'px';
					me._btn_languages.style.bottom=(20+deltaY) + 'px';
			}
		}
		me._btn_languages.logicBlock_position();
		me._btn_languages.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getProjectTranslations().length > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_languages.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_languages.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_languages.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_languages.ggCurrentLogicStateVisible == 0) {
					me._btn_languages.style.visibility=(Number(me._btn_languages.style.opacity)>0||!me._btn_languages.style.opacity)?'inherit':'hidden';
					me._btn_languages.ggVisible=true;
				}
				else {
					me._btn_languages.style.visibility="hidden";
					me._btn_languages.ggVisible=false;
				}
			}
		}
		me._btn_languages.logicBlock_visible();
		me._btn_languages.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_languages'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_languages.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_languages.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_languages.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_languages.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_languages.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_languages.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_languages.logicBlock_backgroundcolor();
		me._btn_languages.onclick=function (e) {
			player.setVariableValue('vis_languages', !player.getVariableValue('vis_languages'));
		}
		me._btn_languages.onmouseenter=function (e) {
			me.elementMouseOver['btn_languages']=true;
			me._btn_languages.logicBlock_backgroundcolor();
		}
		me._btn_languages.onmouseleave=function (e) {
			me.elementMouseOver['btn_languages']=false;
			me._btn_languages.logicBlock_backgroundcolor();
		}
		me._btn_languages.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_languages_icon=document.createElement('div');
		els=me._btn_languages_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8ZyBpZD0iTGF5ZXJfMV8wMDAwMDAwOTU1MzU2OTQ2NDI2OTY1MjEzMDAwMDAwMjEwNzE1MzEyNzMyMjYzNzIzOV8iPgogIDxwYXRoIGQ9IiAgIE0zNC45LDE4YzAsOS4yLTcuNSwxNi43LTE2LjcsMTYuN0gxLjVsNC45LTQuOWMtMy0zLTQuOS03LjItNC45LTExLjhDMS42LDguOCw5LDEuMywxOC4yLDEuM1MzNC45LDguOCwzNC45LDE4eiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8'+
			'L2c+CiA8ZyBpZD0iRWJlbmVfMSI+CiAgPGxpbmUgeDI9IjE3LjYiIHkyPSIxMS4zIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojYzJlODEyO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIxMS4zIiB4MT0iOC40Ii8+CiAgPGxpbmUgeDI9IjEzIiB5Mj0iMTEuMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybG'+
			'ltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iOC4zIiB4MT0iMTMiLz4KICA8cGF0aCBkPSIgICBNOS40LDIwLjRjMy43LTIuMSw2LTUuMSw3LjMtOS4xIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojYzJlODEyO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8cGF0aCBkPSIgICBNMTAuOSwxNC43YzEuNiwyLjcsMy42LDQuMyw1LjgsNS43IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojYzJlODEyO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1s'+
			'aW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8cG9seWxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIiBwb2ludHM9IiAgIDE3LjgsMjYuNiAyMi40LDE1LjkgMjcsMjYuNiAgIi8+CiAgPGxpbmUgeDI9IjI2LjIiIHkyPSIyNC43IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojYzJlODEyO3N0cm9rZS13aW'+
			'R0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyNC43IiB4MT0iMTguNiIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_languages_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_languages_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_languages_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_languages_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_languages.appendChild(me._btn_languages_icon);
		me._button_container.appendChild(me._btn_languages);
		el=me._btn_gyro=document.createElement('div');
		el.ggId="btn_gyro";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_gyro.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (JSON.stringify(me._btn_gyro.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_gyro.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_gyro.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_gyro.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_gyro.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_gyro.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 70;
				}
					me._btn_gyro.style.right=(25+deltaX) + 'px';
					me._btn_gyro.style.bottom=(20+deltaY) + 'px';
			}
		}
		me._btn_gyro.logicBlock_position();
		me._btn_gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_gyro.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_gyro.ggCurrentLogicStateVisible == 0) {
					me._btn_gyro.style.visibility=(Number(me._btn_gyro.style.opacity)>0||!me._btn_gyro.style.opacity)?'inherit':'hidden';
					me._btn_gyro.ggVisible=true;
				}
				else {
					me._btn_gyro.style.visibility="hidden";
					me._btn_gyro.ggVisible=false;
				}
			}
		}
		me._btn_gyro.logicBlock_visible();
		me._btn_gyro.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_gyro'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_gyro.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_gyro.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_gyro.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_gyro.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_gyro.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_gyro.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_gyro.logicBlock_backgroundcolor();
		me._btn_gyro.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._btn_gyro.onmouseenter=function (e) {
			me.elementMouseOver['btn_gyro']=true;
			me._btn_gyro.logicBlock_backgroundcolor();
		}
		me._btn_gyro.onmouseleave=function (e) {
			me.elementMouseOver['btn_gyro']=false;
			me._btn_gyro.logicBlock_backgroundcolor();
		}
		me._btn_gyro.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_gyro_on_icon=document.createElement('div');
		els=me._btn_gyro_on_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzJfMV8iIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4yNTU4O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0LjAxODY7fSYjeGQ7Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2Ut'+
			'bGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8ZWxsaXBzZSBjbGFzcz0ic3QwIiByeT0iNi4xIiByeD0iMTYuNSIgY3g9IjE4IiBjeT0iMTgiLz4KIDxlbGxpcHNlIGNsYXNzPSJzdDEiIHJ5PSI3LjYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMzc4MiAtMC45MjU3IDAuOTI1NyAwLjM3ODIgLTUuMzM0OSAyNy44OTcxKSIgcng9IjE2LjYiIGN4PSIxOC4xIiBjeT0iMTcuOSIvPgogPGxpbmUgY2xhc3M9InN0MiIgeDI9IjE4IiB5Mj0iMTgiIHkxPSIxOCIgeDE9IjE4Ii8+Cjwvc3ZnPgo=';
		me._btn_gyro_on_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_gyro_on_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_gyro_on_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_gyro_on_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_gyro_on_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_gyro_on_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_gyro_on_icon.style.transition='';
				if (me._btn_gyro_on_icon.ggCurrentLogicStateVisible == 0) {
					me._btn_gyro_on_icon.style.visibility="hidden";
					me._btn_gyro_on_icon.ggVisible=false;
				}
				else {
					me._btn_gyro_on_icon.style.visibility=(Number(me._btn_gyro_on_icon.style.opacity)>0||!me._btn_gyro_on_icon.style.opacity)?'inherit':'hidden';
					me._btn_gyro_on_icon.ggVisible=true;
				}
			}
		}
		me._btn_gyro_on_icon.logicBlock_visible();
		me._btn_gyro_on_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_gyro.appendChild(me._btn_gyro_on_icon);
		el=me._btn_gyro_off_icon=document.createElement('div');
		els=me._btn_gyro_off_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzJfY29weSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2IDM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLz'+
			'IwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojYzJlODEyO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9JiN4ZDsKPC9zdHlsZT4KIDxsaW5lIGNsYXNzPSJzdDAiIHgyPSIzNC41IiB5Mj0iMzQuNSIgeTE9IjEuNSIgeDE9IjEuNSIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjcsMjMuN2MtMS45LDAuMy0zLjgsMC40LTUuNywwLjRjLTkuMSwwLTE2LjUtMi43LTE2LjUtNi4xYzAtMi42LDQuNS00LjksMTAuOC01LjciLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9'+
			'Ik0yMC41LDEyYzgsMC40LDE0LDMsMTQsNmMwLDEuNS0xLjUsMi45LTQsNCIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjYsNy4xYzIuOS0zLjYsNi4yLTUuNCw4LjYtNC40YzMuNCwxLjQsNC4xLDcuOCwxLjksMTUiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMy43LDIzLjdjLTMuNSw2LjgtOC42LDExLTEyLDkuNmMtMy45LTEuNi00LjItOS43LTAuOC0xOC4xYzAuNC0xLDAuOC0xLjksMS4zLTIuOCIvPgo8L3N2Zz4K';
		me._btn_gyro_off_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_gyro_off_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_gyro_off_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_gyro_off_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_gyro_off_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_gyro_off_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_gyro_off_icon.style.transition='';
				if (me._btn_gyro_off_icon.ggCurrentLogicStateVisible == 0) {
					me._btn_gyro_off_icon.style.visibility=(Number(me._btn_gyro_off_icon.style.opacity)>0||!me._btn_gyro_off_icon.style.opacity)?'inherit':'hidden';
					me._btn_gyro_off_icon.ggVisible=true;
				}
				else {
					me._btn_gyro_off_icon.style.visibility="hidden";
					me._btn_gyro_off_icon.ggVisible=false;
				}
			}
		}
		me._btn_gyro_off_icon.logicBlock_visible();
		me._btn_gyro_off_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_gyro.appendChild(me._btn_gyro_off_icon);
		me._button_container.appendChild(me._btn_gyro);
		el=me._btn_vr=document.createElement('div');
		el.ggId="btn_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_vr.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (JSON.stringify(me._btn_vr.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_vr.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_vr.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_vr.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_vr.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_vr.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_vr.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 70;
				}
					me._btn_vr.style.right=(25+deltaX) + 'px';
					me._btn_vr.style.bottom=(20+deltaY) + 'px';
			}
		}
		me._btn_vr.logicBlock_position();
		me._btn_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_vr.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_vr.ggCurrentLogicStateVisible == 0) {
					me._btn_vr.style.visibility=(Number(me._btn_vr.style.opacity)>0||!me._btn_vr.style.opacity)?'inherit':'hidden';
					me._btn_vr.ggVisible=true;
				}
				else {
					me._btn_vr.style.visibility="hidden";
					me._btn_vr.ggVisible=false;
				}
			}
		}
		me._btn_vr.logicBlock_visible();
		me._btn_vr.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_vr'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_vr.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_vr.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_vr.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_vr.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_vr.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_vr.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_vr.logicBlock_backgroundcolor();
		me._btn_vr.onclick=function (e) {
			player.enterVR();
		}
		me._btn_vr.onmouseenter=function (e) {
			me.elementMouseOver['btn_vr']=true;
			me._btn_vr.logicBlock_backgroundcolor();
		}
		me._btn_vr.onmouseleave=function (e) {
			me.elementMouseOver['btn_vr']=false;
			me._btn_vr.logicBlock_backgroundcolor();
		}
		me._btn_vr.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_vr_icon=document.createElement('div');
		els=me._btn_vr_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZT0iI2'+
			'MyZTgxMiIgZD0iTTYsMTIuN2gyNCYjeGE7JiN4OTtjMS43LDAsMywxLjEsMywyLjd2OS40YzAsMS43LTEuMywzLTMsM2gtNC42Yy0xLjEsMC0yLjEtMC42LTIuNy0xLjZsLTIuNi00LjVjLTAuMy0wLjYtMS0xLTEuNy0xaC0wLjljLTAuNywwLTEuMywwLjQtMS42LDAuOSYjeGE7JiN4OTtsLTIuOCw0LjZjLTAuNiwwLjktMS42LDEuNS0yLjYsMS41SDZjLTEuNywwLTMtMS4zLTMtM3YtOS40QzMsMTMuOCw0LjMsMTIuNyw2LDEyLjd6IiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0i'+
			'cm91bmQiLz4KIDxwb2x5bGluZSBzdHJva2U9IiNjMmU4MTIiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcG9pbnRzPSIxMy4yLDEyLjcgJiN4YTsmI3g5OzEzLjIsNC4yIDIyLjgsNC4yIDIyLjgsMTIuNyAiLz4KPC9zdmc+Cg==';
		me._btn_vr_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_vr_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_vr_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_vr_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_vr.appendChild(me._btn_vr_icon);
		me._button_container.appendChild(me._btn_vr);
		el=me._btn_audio=document.createElement('div');
		el.ggId="btn_audio";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_audio.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_audio.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (JSON.stringify(me._btn_audio.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_audio.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_audio.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_audio.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_audio.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_audio.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_audio.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_audio.ggConditionsTruePosition.includes(4)) {
					deltaX += 0;
					deltaY += 70;
				}
					me._btn_audio.style.right=(25+deltaX) + 'px';
					me._btn_audio.style.bottom=(20+deltaY) + 'px';
			}
		}
		me._btn_audio.logicBlock_position();
		me._btn_audio.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getHasSounds() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_audio.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_audio.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_audio.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_audio.ggCurrentLogicStateVisible == 0) {
					me._btn_audio.style.visibility=(Number(me._btn_audio.style.opacity)>0||!me._btn_audio.style.opacity)?'inherit':'hidden';
					me._btn_audio.ggVisible=true;
				}
				else {
					me._btn_audio.style.visibility="hidden";
					me._btn_audio.ggVisible=false;
				}
			}
		}
		me._btn_audio.logicBlock_visible();
		me._btn_audio.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_audio'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_audio.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_audio.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_audio.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_audio.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_audio.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_audio.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_audio.logicBlock_backgroundcolor();
		me._btn_audio.onclick=function (e) {
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
			player.toggleMuted("_all");
		}
		me._btn_audio.onmouseenter=function (e) {
			me.elementMouseOver['btn_audio']=true;
			me._btn_audio.logicBlock_backgroundcolor();
		}
		me._btn_audio.onmouseleave=function (e) {
			me.elementMouseOver['btn_audio']=false;
			me._btn_audio.logicBlock_backgroundcolor();
		}
		me._btn_audio.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_audio_on=document.createElement('div');
		els=me._btn_audio_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5Z29uIHN0cm9rZT'+
			'0iI2MyZTgxMiIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjE2LjUsNy41ICYjeGE7JiN4OTs5LDEzLjUgMywxMy41IDMsMjIuNSA5LDIyLjUgMTYuNSwyOC41ICIvPgogPHBhdGggc3Ryb2tlPSIjYzJlODEyIiBkPSJNMjguNiw3LjQmI3hhOyYjeDk7YzUuOSw1LjksNS45LDE1LjQsMCwyMS4yIE0yMy4zLDEyLjdjMi45LDIuOSwyLjksNy43LDAsMTAuNiIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9'+
			'InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=';
		me._btn_audio_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_audio_on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_audio_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_audio_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_audio_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_audio_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_audio_on.style.transition='';
				if (me._btn_audio_on.ggCurrentLogicStateVisible == 0) {
					me._btn_audio_on.style.visibility=(Number(me._btn_audio_on.style.opacity)>0||!me._btn_audio_on.style.opacity)?'inherit':'hidden';
					me._btn_audio_on.ggVisible=true;
				}
				else {
					me._btn_audio_on.style.visibility="hidden";
					me._btn_audio_on.ggVisible=false;
				}
			}
		}
		me._btn_audio_on.logicBlock_visible();
		me._btn_audio_on.ggUpdatePosition=function (useTransition) {
		}
		me._btn_audio.appendChild(me._btn_audio_on);
		el=me._btn_audio_off=document.createElement('div');
		els=me._btn_audio_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5Z29uIHN0cm9rZT'+
			'0iI2MyZTgxMiIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjE2LjUsNy41ICYjeGE7JiN4OTs5LDEzLjUgMywxMy41IDMsMjIuNSA5LDIyLjUgMTYuNSwyOC41ICIvPgogPGxpbmUgeDI9IjI1LjUiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4MT0iMzQuNSIgc3Ryb2tlPSIjYzJlODEyIiB5Mj0iMjIuNSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHkxPSIxMy41IiBmaWxsPSJub25l'+
			'Ii8+CiA8bGluZSB4Mj0iMzQuNSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHgxPSIyNS41IiBzdHJva2U9IiNjMmU4MTIiIHkyPSIyMi41IiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeTE9IjEzLjUiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg==';
		me._btn_audio_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_audio_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_audio_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_audio_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_audio_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_audio_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_audio_off.style.transition='';
				if (me._btn_audio_off.ggCurrentLogicStateVisible == 0) {
					me._btn_audio_off.style.visibility="hidden";
					me._btn_audio_off.ggVisible=false;
				}
				else {
					me._btn_audio_off.style.visibility=(Number(me._btn_audio_off.style.opacity)>0||!me._btn_audio_off.style.opacity)?'inherit':'hidden';
					me._btn_audio_off.ggVisible=true;
				}
			}
		}
		me._btn_audio_off.logicBlock_visible();
		me._btn_audio_off.ggUpdatePosition=function (useTransition) {
		}
		me._btn_audio.appendChild(me._btn_audio_off);
		me._button_container.appendChild(me._btn_audio);
		el=me._btn_share=document.createElement('div');
		el.ggId="btn_share";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 20px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_share.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_share.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (JSON.stringify(me._btn_share.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_share.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_share.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_share.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_share.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_share.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_share.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_share.ggConditionsTruePosition.includes(4)) {
					deltaX += 0;
					deltaY += 70;
				}
				if (me._btn_share.ggConditionsTruePosition.includes(5)) {
					deltaX += 0;
					deltaY += 70;
				}
					me._btn_share.style.right=(25+deltaX) + 'px';
					me._btn_share.style.bottom=(20+deltaY) + 'px';
			}
		}
		me._btn_share.logicBlock_position();
		me._btn_share.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_share') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_share.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_share.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_share.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_share.ggCurrentLogicStateVisible == 0) {
					me._btn_share.style.visibility=(Number(me._btn_share.style.opacity)>0||!me._btn_share.style.opacity)?'inherit':'hidden';
					me._btn_share.ggVisible=true;
				}
				else {
					me._btn_share.style.visibility="hidden";
					me._btn_share.ggVisible=false;
				}
			}
		}
		me._btn_share.logicBlock_visible();
		me._btn_share.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_share'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_share.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_share.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_share.style.transition='right 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_share.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_share.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_share.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_share.logicBlock_backgroundcolor();
		me._btn_share.onmouseenter=function (e) {
			me.elementMouseOver['btn_share']=true;
			me._btn_share.logicBlock_backgroundcolor();
		}
		me._btn_share.onmouseleave=function (e) {
			me.elementMouseOver['btn_share']=false;
			me._btn_share.logicBlock_backgroundcolor();
		}
		me._btn_share.ggUpdatePosition=function (useTransition) {
		}
		el=me._share_btns_container=document.createElement('div');
		el.ggId="share_btns_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 6px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 138px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share_btns_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share_btns_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_copy=document.createElement('div');
		els=me._btn_copy__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZT0iI2'+
			'MyZTgxMiIgZD0iTTE2LjUsMTMuNUgzMCYjeGE7JiN4OTtjMS43LDAsMywxLjMsMywzVjMwYzAsMS43LTEuMywzLTMsM0gxNi41Yy0xLjcsMC0zLTEuMy0zLTNWMTYuNUMxMy41LDE0LjgsMTQuOCwxMy41LDE2LjUsMTMuNXoiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogPHBhdGggc3Ryb2tlPSIjYzJlODEyIiBkPSJNNy41LDIyLjVINiYjeGE7JiN4OTtjLTEuNywwLTMtMS4zLTMtM1Y2YzAtMS43LDEuMy0zLDMtM2gxMy41YzEuNywwLDMsMS4zLDMsM3YxLjUi'+
			'IHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K';
		me._btn_copy__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_copy";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_copy.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_copy.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_share_copy') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (JSON.stringify(me._btn_copy.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_copy.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_copy.style.transition='left 0s, top 0s';
				if (me._btn_copy.ggConditionsTruePosition.includes(0)) {
					deltaX += 38;
					deltaY += 0;
				}
				if (me._btn_copy.ggConditionsTruePosition.includes(1)) {
					deltaX += 12;
					deltaY += 0;
				}
				if (me._btn_copy.ggConditionsTruePosition.includes(2)) {
					deltaX += 38;
					deltaY += 0;
				}
				if (me._btn_copy.ggConditionsTruePosition.includes(3)) {
					deltaX += 12;
					deltaY += 0;
				}
					me._btn_copy.style.left=(0+deltaX) + 'px';
					me._btn_copy.style.top = 'calc(50% - (38px / 2) - (0px / 2) + ' + (0+deltaY) + 'px)';
			}
		}
		me._btn_copy.logicBlock_position();
		me._btn_copy.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_copy.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_copy.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_copy.style.transition='left 0s, top 0s';
				if (me._btn_copy.ggCurrentLogicStateVisible == 0) {
					me._btn_copy.style.visibility=(Number(me._btn_copy.style.opacity)>0||!me._btn_copy.style.opacity)?'inherit':'hidden';
					me._btn_copy.ggVisible=true;
				}
				else {
					me._btn_copy.style.visibility="hidden";
					me._btn_copy.ggVisible=false;
				}
			}
		}
		me._btn_copy.logicBlock_visible();
		me._btn_copy.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + player.getCurrentNode() + "," + (Math.round(player.getPan() * 100) / 100) + "," + (Math.round(player.getTilt() * 100) / 100) + "," + (Math.round(player.getFov() * 100) / 100) + "," + player.getProjection();

dummy = document.createElement('input');
document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);
alert("The current view has been copied.");
		}
		me._btn_copy.ggUpdatePosition=function (useTransition) {
		}
		me._share_btns_container.appendChild(me._btn_copy);
		el=me._btn_twitter=document.createElement('div');
		els=me._btn_twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyOCAyOCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOCAyODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNjMmU4MTI7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2LDEyLjNsNy45LTkuMUgyMmwtNi44LDcuOUw5LjcsMy4ySDMuNGw4LjIsMTJsLTguMiw5LjZoMS45bDcuMi04LjRsNS44LDguNGg2LjNMMTYsMTIuM0wxNiwxMi4zeiAgIE0xMy40LDE1LjNsLTAuOC0xLjJMNiw0LjZoMi45bDUuNCw3LjdsMC44LDEuMmw3LDEwaC0yLjlMMTMuNCwxNS4zTDEzLjQsMTUuM3oiLz4KPC9zdmc+Cg==';
		me._btn_twitter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_twitter";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_twitter.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (JSON.stringify(me._btn_twitter.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_twitter.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_twitter.style.transition='left 0s, top 0s';
				if (me._btn_twitter.ggConditionsTruePosition.includes(0)) {
					deltaX += 38;
					deltaY += 0;
				}
				if (me._btn_twitter.ggConditionsTruePosition.includes(1)) {
					deltaX += 12;
					deltaY += 0;
				}
					me._btn_twitter.style.left=(0+deltaX) + 'px';
					me._btn_twitter.style.top = 'calc(50% - (38px / 2) - (0px / 2) + ' + (0+deltaY) + 'px)';
			}
		}
		me._btn_twitter.logicBlock_position();
		me._btn_twitter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_twitter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_twitter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_twitter.style.transition='left 0s, top 0s';
				if (me._btn_twitter.ggCurrentLogicStateVisible == 0) {
					me._btn_twitter.style.visibility=(Number(me._btn_twitter.style.opacity)>0||!me._btn_twitter.style.opacity)?'inherit':'hidden';
					me._btn_twitter.ggVisible=true;
				}
				else {
					me._btn_twitter.style.visibility="hidden";
					me._btn_twitter.ggVisible=false;
				}
			}
		}
		me._btn_twitter.logicBlock_visible();
		me._btn_twitter.onclick=function (e) {
			window.open('http://twitter.com/share?url=' + location.href);
		}
		me._btn_twitter.ggUpdatePosition=function (useTransition) {
		}
		me._share_btns_container.appendChild(me._btn_twitter);
		el=me._btn_facebook=document.createElement('div');
		els=me._btn_facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZT0iI2'+
			'MyZTgxMiIgZD0iTTI3LDNoLTQuNSYjeGE7JiN4OTtDMTguNCwzLDE1LDYuNCwxNSwxMC41VjE1aC00LjV2NkgxNXYxMmg2VjIxaDQuNWwxLjUtNmgtNnYtNC41QzIxLDkuNywyMS43LDksMjIuNSw5SDI3VjN6IiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==';
		me._btn_facebook__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_facebook";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_facebook.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_facebook.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_facebook.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_facebook.style.transition='';
				if (me._btn_facebook.ggCurrentLogicStateVisible == 0) {
					me._btn_facebook.style.visibility=(Number(me._btn_facebook.style.opacity)>0||!me._btn_facebook.style.opacity)?'inherit':'hidden';
					me._btn_facebook.ggVisible=true;
				}
				else {
					me._btn_facebook.style.visibility="hidden";
					me._btn_facebook.ggVisible=false;
				}
			}
		}
		me._btn_facebook.logicBlock_visible();
		me._btn_facebook.onclick=function (e) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
		}
		me._btn_facebook.ggUpdatePosition=function (useTransition) {
		}
		me._share_btns_container.appendChild(me._btn_facebook);
		me._btn_share.appendChild(me._share_btns_container);
		el=me._btn_share_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_share_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_share_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_share_icon_container.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + player.getCurrentNode() + "," + player.getPan() + "," + player.getTilt() + "," + player.getFov() + ",4";
if (navigator.canShare) {
  player.setVariableValue('share_api', navigator.canShare({ url: text }) && player.getIsMobile());
  player.setVariableValue('share_url', text);
}
			if (
				(
					((player.getVariableValue('share_api') == true))
				)
			) {
				let shareUrl = player.getVariableValue('share_url');
navigator.share({ url: shareUrl });
			}
			if (
				(
					((player.getVariableValue('share_api') == false))
				)
			) {
				player.setVariableValue('vis_share', !player.getVariableValue('vis_share'));
			}
		}
		me._btn_share_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_share_icon=document.createElement('div');
		els=me._btn_share_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxjaXJjbGUgc3Ryb2tlLW'+
			'9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2MyZTgxMiIgcj0iNC41IiBzdHJva2Utd2lkdGg9IjEuMjUiIGN4PSIyNi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIGN5PSI3LjUiLz4KIDxjaXJjbGUgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2MyZTgxMiIgcj0iNC41IiBzdHJva2Utd2lkdGg9IjEuMjUiIGN4PSI4LjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgY3k9IjE4Ii8+CiA8Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5k'+
			'IiBzdHJva2U9IiNjMmU4MTIiIHI9IjQuNSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBjeD0iMjYuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBjeT0iMjguNSIvPgogPGxpbmUgeDI9IjIyLjMiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4MT0iMTIuMSIgc3Ryb2tlPSIjYzJlODEyIiB5Mj0iMjYuMiIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHkxPSIyMC4zIiBmaWxsPSJub25lIi8+CiA8bGluZSB4Mj0iMTIuMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHgxPSIyMi4zIi'+
			'BzdHJva2U9IiNjMmU4MTIiIHkyPSIxNS43IiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeTE9IjkuOCIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K';
		me._btn_share_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_share_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_share_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_share_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_share_icon_container.appendChild(me._btn_share_icon);
		me._btn_share.appendChild(me._btn_share_icon_container);
		me._button_container.appendChild(me._btn_share);
		el=me._btn_info=document.createElement('div');
		el.ggId="btn_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('opt_maps') == true)) && 
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('opt_maps') == true)) || 
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStatePosition = 3;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._btn_info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._btn_info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._btn_info.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_info.ggCurrentLogicStatePosition == 0) {
					me._btn_info.style.right='25px';
					me._btn_info.style.top='calc(50% - 50px)';
				}
				else if (me._btn_info.ggCurrentLogicStatePosition == 1) {
					me._btn_info.style.right='25px';
					me._btn_info.style.top='calc(50% - 50px)';
				}
				else if (me._btn_info.ggCurrentLogicStatePosition == 2) {
					me._btn_info.style.right='25px';
					me._btn_info.style.top='160px';
				}
				else if (me._btn_info.ggCurrentLogicStatePosition == 3) {
					me._btn_info.style.right='25px';
					me._btn_info.style.top='90px';
				}
				else {
					me._btn_info.style.right='25px';
					me._btn_info.style.top='20px';
				}
			}
		}
		me._btn_info.logicBlock_position();
		me._btn_info.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_info') == true)) && 
				((player.getVariableValue('opt_floorplans') == true)) && 
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getVariableValue('vis_info') == true)) && 
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getVariableValue('vis_info') == true)) && 
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getVariableValue('vis_info') == true))
			)
			{
				newLogicStateSize = 3;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._btn_info.ggCurrentLogicStateSize != newLogicStateSize) {
				me._btn_info.ggCurrentLogicStateSize = newLogicStateSize;
				me._btn_info.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_info.ggCurrentLogicStateSize == 0) {
					me._btn_info.style.width='clamp(370px, 30%, 1000px)';
					me._btn_info.style.height='calc(50% - 160px)';
					setTimeout(function() {skin.updateSize(me._btn_info);}, 800);
				}
				else if (me._btn_info.ggCurrentLogicStateSize == 1) {
					me._btn_info.style.width='clamp(370px, 30%, 1000px)';
					me._btn_info.style.height='calc(50% - 90px)';
					setTimeout(function() {skin.updateSize(me._btn_info);}, 800);
				}
				else if (me._btn_info.ggCurrentLogicStateSize == 2) {
					me._btn_info.style.width='clamp(370px, 30%, 1000px)';
					me._btn_info.style.height='calc(50% - 90px)';
					setTimeout(function() {skin.updateSize(me._btn_info);}, 800);
				}
				else if (me._btn_info.ggCurrentLogicStateSize == 3) {
					me._btn_info.style.width='clamp(370px, 30%, 1000px)';
					me._btn_info.style.height='calc(50% - 20px)';
					setTimeout(function() {skin.updateSize(me._btn_info);}, 800);
				}
				else {
					me._btn_info.style.width='50px';
					me._btn_info.style.height='50px';
					setTimeout(function() {skin.updateSize(me._btn_info);}, 800);
				}
			}
		}
		me._btn_info.logicBlock_size();
		me._btn_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_info') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_info.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_info.ggCurrentLogicStateVisible == 0) {
					me._btn_info.style.visibility=(Number(me._btn_info.style.opacity)>0||!me._btn_info.style.opacity)?'inherit':'hidden';
					me._btn_info.ggVisible=true;
				}
				else {
					me._btn_info.style.visibility="hidden";
					me._btn_info.ggVisible=false;
				}
			}
		}
		me._btn_info.logicBlock_visible();
		me._btn_info.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_info'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_info.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_info.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_info.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_info.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_info.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_info.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_info.logicBlock_backgroundcolor();
		me._btn_info.onmouseenter=function (e) {
			me.elementMouseOver['btn_info']=true;
			me._btn_info.logicBlock_backgroundcolor();
		}
		me._btn_info.onmouseleave=function (e) {
			me.elementMouseOver['btn_info']=false;
			me._btn_info.logicBlock_backgroundcolor();
		}
		me._btn_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_text=document.createElement('div');
		el.ggId="info_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 70px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text karla";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 40px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._info_text.appendChild(me._info_text_body);
		el=me._info_text_headline=document.createElement('div');
		els=me._info_text_headline__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_headline";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_text_headline.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_headline.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_text_headline.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_headline.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_headline.ggUpdatePosition=function (useTransition) {
		}
		me._info_text.appendChild(me._info_text_headline);
		me._btn_info.appendChild(me._info_text);
		el=me._btn_info_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_info_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_info_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', !player.getVariableValue('vis_info'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorplan.style.transition='none';
				} else {
					me._floorplan.style.transition='all 200ms ease-out 0ms';
				}
				me._floorplan.style.opacity='0';
				me._floorplan.style.visibility='hidden';
				if (me._floorplan.ggClearMap) me._floorplan.ggClearMap();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._map.style.transition='none';
				} else {
					me._map.style.transition='all 200ms ease-out 0ms';
				}
				me._map.style.opacity='0';
				me._map.style.visibility='hidden';
				if (me._map.ggClearMap) me._map.ggClearMap();
			}
			if (
				(
					((player.getVariableValue('vis_info') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._info_text.style.transition='none';
				} else {
					me._info_text.style.transition='all 300ms ease-out 750ms';
				}
				me._info_text.style.opacity='1';
				me._info_text.style.visibility=me._info_text.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('vis_info') == false)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._info_text.style.transition='none';
				} else {
					me._info_text.style.transition='all 200ms ease-out 0ms';
				}
				me._info_text.style.opacity='0';
				me._info_text.style.visibility='hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					me._info_popup_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.ggUserdata.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._info_popup_title_phone.ggUpdateText();
				me._info_popup_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					me._info_popup_text_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.ggUserdata.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._info_popup_text_phone.ggUpdateText();
				me._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			}
		}
		me._btn_info_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_info_icon=document.createElement('div');
		els=me._btn_info_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIHI9IjE1IiBjeD0iMTgiIGN5PSIxOCIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDI9IjE4IiB5Mj0iMTgiIHkxPSIyNCIgeDE9IjE4Ii8+'+
			'CiA8bGluZSBjbGFzcz0ic3QxIiB4Mj0iMTgiIHkyPSIxMiIgeTE9IjEyIiB4MT0iMTgiLz4KPC9zdmc+Cg==';
		me._btn_info_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_info_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_info_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_info_icon_container.appendChild(me._btn_info_icon);
		me._btn_info.appendChild(me._btn_info_icon_container);
		me._button_container.appendChild(me._btn_info);
		el=me._btn_floorplan=document.createElement('div');
		el.ggId="btn_floorplan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_floorplan.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_map') == true)) && 
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_map') == true)) && 
				((player.getVariableValue('opt_info') == false))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._btn_floorplan.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._btn_floorplan.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._btn_floorplan.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_floorplan.ggCurrentLogicStatePosition == 0) {
					me._btn_floorplan.style.right='25px';
					me._btn_floorplan.style.top='calc(50% - 120px)';
				}
				else if (me._btn_floorplan.ggCurrentLogicStatePosition == 1) {
					me._btn_floorplan.style.right='25px';
					me._btn_floorplan.style.top='calc(50% - 50px)';
				}
				else if (me._btn_floorplan.ggCurrentLogicStatePosition == 2) {
					me._btn_floorplan.style.right='25px';
					me._btn_floorplan.style.top='90px';
				}
				else {
					me._btn_floorplan.style.right='25px';
					me._btn_floorplan.style.top='20px';
				}
			}
		}
		me._btn_floorplan.logicBlock_position();
		me._btn_floorplan.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_floorplan') == true)) && 
				((player.getVariableValue('opt_maps') == true)) && 
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true)) && 
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true)) && 
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateSize = 3;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._btn_floorplan.ggCurrentLogicStateSize != newLogicStateSize) {
				me._btn_floorplan.ggCurrentLogicStateSize = newLogicStateSize;
				me._btn_floorplan.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_floorplan.ggCurrentLogicStateSize == 0) {
					me._btn_floorplan.style.width='clamp(370px, 30%, 1000px)';
					me._btn_floorplan.style.height='calc(50% - 160px)';
					setTimeout(function() {skin.updateSize(me._btn_floorplan);}, 800);
				}
				else if (me._btn_floorplan.ggCurrentLogicStateSize == 1) {
					me._btn_floorplan.style.width='clamp(370px, 30%, 1000px)';
					me._btn_floorplan.style.height='calc(50% - 90px)';
					setTimeout(function() {skin.updateSize(me._btn_floorplan);}, 800);
				}
				else if (me._btn_floorplan.ggCurrentLogicStateSize == 2) {
					me._btn_floorplan.style.width='clamp(370px, 30%, 1000px)';
					me._btn_floorplan.style.height='calc(50% - 90px)';
					setTimeout(function() {skin.updateSize(me._btn_floorplan);}, 800);
				}
				else if (me._btn_floorplan.ggCurrentLogicStateSize == 3) {
					me._btn_floorplan.style.width='clamp(370px, 30%, 1000px)';
					me._btn_floorplan.style.height='calc(50% - 20px)';
					setTimeout(function() {skin.updateSize(me._btn_floorplan);}, 800);
				}
				else {
					me._btn_floorplan.style.width='50px';
					me._btn_floorplan.style.height='50px';
					setTimeout(function() {skin.updateSize(me._btn_floorplan);}, 800);
				}
			}
		}
		me._btn_floorplan.logicBlock_size();
		me._btn_floorplan.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_floorplan.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_floorplan.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_floorplan.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_floorplan.ggCurrentLogicStateVisible == 0) {
					me._btn_floorplan.style.visibility=(Number(me._btn_floorplan.style.opacity)>0||!me._btn_floorplan.style.opacity)?'inherit':'hidden';
					me._btn_floorplan.ggVisible=true;
				}
				else {
					me._btn_floorplan.style.visibility="hidden";
					me._btn_floorplan.ggVisible=false;
				}
			}
		}
		me._btn_floorplan.logicBlock_visible();
		me._btn_floorplan.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_floorplan'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_floorplan.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_floorplan.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_floorplan.style.transition='right 750ms ease-in-out 0ms, top 750ms ease-in-out 0ms, width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_floorplan.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_floorplan.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_floorplan.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_floorplan.logicBlock_backgroundcolor();
		me._btn_floorplan.onmouseenter=function (e) {
			me.elementMouseOver['btn_floorplan']=true;
			me._btn_floorplan.logicBlock_backgroundcolor();
		}
		me._btn_floorplan.onmouseleave=function (e) {
			me.elementMouseOver['btn_floorplan']=false;
			me._btn_floorplan.logicBlock_backgroundcolor();
		}
		me._btn_floorplan.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplan=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 70px);';
		hs+='left : calc(50% - ((calc(100% - 40px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan.ggUpdatePosition=function (useTransition) {
		}
		me._btn_floorplan.appendChild(me._floorplan);
		el=me._btn_floorplan_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_floorplan_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_floorplan_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', !player.getVariableValue('vis_floorplan'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._info_text.style.transition='none';
				} else {
					me._info_text.style.transition='all 200ms ease-out 0ms';
				}
				me._info_text.style.opacity='0';
				me._info_text.style.visibility='hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._map.style.transition='none';
				} else {
					me._map.style.transition='all 200ms ease-out 0ms';
				}
				me._map.style.opacity='0';
				me._map.style.visibility='hidden';
				if (me._map.ggClearMap) me._map.ggClearMap();
			}
			if (
				(
					((player.getVariableValue('vis_floorplan') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorplan.style.transition='none';
				} else {
					me._floorplan.style.transition='all 300ms ease-out 750ms';
				}
				me._floorplan.style.opacity='1';
				me._floorplan.style.visibility=me._floorplan.ggVisible?'inherit':'hidden';
				if (me._floorplan.ggMapNotLoaded && me._floorplan.ggInitMap) {
					me._floorplan.ggInitMap(false);
					me._floorplan.ggInitMapMarkers(true);
				}
			}
			if (
				(
					((player.getVariableValue('vis_floorplan') == false)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorplan.style.transition='none';
				} else {
					me._floorplan.style.transition='all 200ms ease-out 0ms';
				}
				me._floorplan.style.opacity='0';
				me._floorplan.style.visibility='hidden';
				if (me._floorplan.ggClearMap) me._floorplan.ggClearMap();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', true);
			}
		}
		me._btn_floorplan_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_floorplan_icon=document.createElement('div');
		els=me._btn_floorplan_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5Z29uIHN0cm9rZT'+
			'0iI2MyZTgxMiIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjEuNSw5IDEuNSwzMyAmI3hhOyYjeDk7MTIsMjcgMjQsMzMgMzQuNSwyNyAzNC41LDMgMjQsOSAxMiwzICIvPgogPGxpbmUgeDI9IjEyIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgeDE9IjEyIiBzdHJva2U9IiNjMmU4MTIiIHkyPSIyNyIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHkxPSIzIiBmaWxsPSJub25lIi8+CiA8'+
			'bGluZSB4Mj0iMjQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4MT0iMjQiIHN0cm9rZT0iI2MyZTgxMiIgeTI9IjMzIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeTE9IjkiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg==';
		me._btn_floorplan_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_floorplan_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_floorplan_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_floorplan_icon_container.appendChild(me._btn_floorplan_icon);
		me._btn_floorplan.appendChild(me._btn_floorplan_icon_container);
		me._button_container.appendChild(me._btn_floorplan);
		el=me._btn_map=document.createElement('div');
		el.ggId="btn_map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_map.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_map') == true)) && 
				((player.getVariableValue('opt_floorplans') == true)) && 
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getVariableValue('vis_map') == true)) && 
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getVariableValue('vis_map') == true)) && 
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateSize = 3;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._btn_map.ggCurrentLogicStateSize != newLogicStateSize) {
				me._btn_map.ggCurrentLogicStateSize = newLogicStateSize;
				me._btn_map.style.transition='width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_map.ggCurrentLogicStateSize == 0) {
					me._btn_map.style.width='clamp(370px, 30%, 1000px)';
					me._btn_map.style.height='calc(50% - 160px)';
					setTimeout(function() {skin.updateSize(me._btn_map);}, 800);
				}
				else if (me._btn_map.ggCurrentLogicStateSize == 1) {
					me._btn_map.style.width='clamp(370px, 30%, 1000px)';
					me._btn_map.style.height='calc(50% - 90px)';
					setTimeout(function() {skin.updateSize(me._btn_map);}, 800);
				}
				else if (me._btn_map.ggCurrentLogicStateSize == 2) {
					me._btn_map.style.width='clamp(370px, 30%, 1000px)';
					me._btn_map.style.height='calc(50% - 90px)';
					setTimeout(function() {skin.updateSize(me._btn_map);}, 800);
				}
				else if (me._btn_map.ggCurrentLogicStateSize == 3) {
					me._btn_map.style.width='clamp(370px, 30%, 1000px)';
					me._btn_map.style.height='calc(50% - 20px)';
					setTimeout(function() {skin.updateSize(me._btn_map);}, 800);
				}
				else {
					me._btn_map.style.width='50px';
					me._btn_map.style.height='50px';
					setTimeout(function() {skin.updateSize(me._btn_map);}, 800);
				}
			}
		}
		me._btn_map.logicBlock_size();
		me._btn_map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_map.style.transition='width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_map.ggCurrentLogicStateVisible == 0) {
					me._btn_map.style.visibility=(Number(me._btn_map.style.opacity)>0||!me._btn_map.style.opacity)?'inherit':'hidden';
					me._btn_map.ggVisible=true;
				}
				else {
					me._btn_map.style.visibility="hidden";
					me._btn_map.ggVisible=false;
				}
			}
		}
		me._btn_map.logicBlock_visible();
		me._btn_map.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_map'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_map.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_map.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_map.style.transition='width 750ms ease-in-out 0ms, height 750ms ease-in-out 0ms, background-color 100ms ease 0ms';
				if (me._btn_map.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_map.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_map.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_map.logicBlock_backgroundcolor();
		me._btn_map.onmouseenter=function (e) {
			me.elementMouseOver['btn_map']=true;
			me._btn_map.logicBlock_backgroundcolor();
		}
		me._btn_map.onmouseleave=function (e) {
			me.elementMouseOver['btn_map']=false;
			me._btn_map.logicBlock_backgroundcolor();
		}
		me._btn_map.ggUpdatePosition=function (useTransition) {
		}
		el=me._map=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 70px);';
		hs+='left : calc(50% - ((calc(100% - 40px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		me._btn_map.appendChild(me._map);
		el=me._map_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="map_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 13px;';
		hs+='left : 99px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_timer.ggIsActive=function() {
			return (me._map_timer.ggTimestamp + me._map_timer.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_timer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._map_timer.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_timer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_timer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_timer.style.transition='';
				if (me._map_timer.ggCurrentLogicStateVisible == 0) {
					me._map_timer.style.visibility="hidden";
					me._map_timer.ggVisible=false;
				}
				else {
					me._map_timer.style.visibility=(Number(me._map_timer.style.opacity)>0||!me._map_timer.style.opacity)?'inherit':'hidden';
					me._map_timer.ggVisible=true;
				}
			}
		}
		me._map_timer.logicBlock_visible();
		me._map_timer.ggDeactivate=function () {
			if (me._map.ggFitBounds) me._map.ggFitBounds(true);
		}
		me._map_timer.ggCurrentLogicStateVisible = -1;
		me._map_timer.ggUpdateConditionTimer=function () {
			me._map_timer.logicBlock_visible();
		}
		me._map_timer.ggUpdatePosition=function (useTransition) {
		}
		me._btn_map.appendChild(me._map_timer);
		el=me._btn_map_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_map_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_map_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', !player.getVariableValue('vis_map'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._map_timer.ggTimeout=Number("0.8") * 1000.0;
				me._map_timer.ggTimestamp=skin.ggCurrentTime;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._info_text.style.transition='none';
				} else {
					me._info_text.style.transition='all 200ms ease-out 0ms';
				}
				me._info_text.style.opacity='0';
				me._info_text.style.visibility='hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorplan.style.transition='none';
				} else {
					me._floorplan.style.transition='all 200ms ease-out 0ms';
				}
				me._floorplan.style.opacity='0';
				me._floorplan.style.visibility='hidden';
				if (me._floorplan.ggClearMap) me._floorplan.ggClearMap();
			}
			if (
				(
					((player.getVariableValue('vis_map') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._map.style.transition='none';
				} else {
					me._map.style.transition='all 300ms ease-out 750ms';
				}
				me._map.style.opacity='1';
				me._map.style.visibility=me._map.ggVisible?'inherit':'hidden';
				if (me._map.ggMapNotLoaded && me._map.ggInitMap) {
					me._map.ggInitMap(false);
					me._map.ggInitMapMarkers(true);
				}
			}
			if (
				(
					((player.getVariableValue('vis_map') == false)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._map.style.transition='none';
				} else {
					me._map.style.transition='all 200ms ease-out 0ms';
				}
				me._map.style.opacity='0';
				me._map.style.visibility='hidden';
				if (me._map.ggClearMap) me._map.ggClearMap();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', true);
			}
		}
		me._btn_map_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_map_icon=document.createElement('div');
		els=me._btn_map_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzEuNSwxNUMzMS41LDI1LjUsMTgsMzQuNSwxOCwzNC41UzQuNSwyNS41LDQuNSwxNWMwLTcuNSw2LTEzLjUsMTMuNS0xMy41UzMxLjUsNy41LDMxLjUsMTV6Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIHI9IjQuNSIgY3g9IjE4IiBjeT0iMTUiLz4KPC9zdmc+Cg==';
		me._btn_map_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_map_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_map_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_map_icon_container.appendChild(me._btn_map_icon);
		me._btn_map.appendChild(me._btn_map_icon_container);
		me._button_container.appendChild(me._btn_map);
		me.divSkin.appendChild(me._button_container);
		el=me._button_container_phone=document.createElement('div');
		el.ggId="button_container_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_container_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_container_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_container_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_container_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_container_phone.style.transition='';
				if (me._button_container_phone.ggCurrentLogicStateVisible == 0) {
					me._button_container_phone.style.visibility=(Number(me._button_container_phone.style.opacity)>0||!me._button_container_phone.style.opacity)?'inherit':'hidden';
					me._button_container_phone.ggVisible=true;
				}
				else {
					me._button_container_phone.style.visibility="hidden";
					me._button_container_phone.ggVisible=false;
				}
			}
		}
		me._button_container_phone.logicBlock_visible();
		me._button_container_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_thumbnails_phone=document.createElement('div');
		el.ggId="btn_thumbnails_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_thumbnails_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_thumbnails_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_thumbnails_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_thumbnails_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_thumbnails_phone.style.transition='background-color 100ms ease 0ms';
				if (me._btn_thumbnails_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_thumbnails_phone.style.visibility=(Number(me._btn_thumbnails_phone.style.opacity)>0||!me._btn_thumbnails_phone.style.opacity)?'inherit':'hidden';
					me._btn_thumbnails_phone.ggVisible=true;
				}
				else {
					me._btn_thumbnails_phone.style.visibility="hidden";
					me._btn_thumbnails_phone.ggVisible=false;
				}
			}
		}
		me._btn_thumbnails_phone.logicBlock_visible();
		me._btn_thumbnails_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_thumbnails_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_thumbnails_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_thumbnails_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_thumbnails_phone.style.transition='background-color 100ms ease 0ms';
				if (me._btn_thumbnails_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_thumbnails_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_thumbnails_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_thumbnails_phone.logicBlock_backgroundcolor();
		me._btn_thumbnails_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_thumbs', true);
			me._node_cloner_phone.ggText="";
			me._node_cloner_phone.ggUpdate([]);
			skin.updateSize(skin.divSkin);
		}
		me._btn_thumbnails_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_thumbnails_phone']=true;
			me._btn_thumbnails_phone.logicBlock_backgroundcolor();
		}
		me._btn_thumbnails_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_thumbnails_phone']=false;
			me._btn_thumbnails_phone.logicBlock_backgroundcolor();
		}
		me._btn_thumbnails_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_thumbnails_icon_phone=document.createElement('div');
		els=me._btn_thumbnails_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxjaXJjbGUgc3Ryb2tlLW'+
			'9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2MyZTgxMiIgcj0iMS41IiBzdHJva2Utd2lkdGg9IjEuMjUiIGN4PSIxOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBjeT0iMTgiLz4KIDxjaXJjbGUgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2MyZTgxMiIgcj0iMS41IiBzdHJva2Utd2lkdGg9IjEuMjUiIGN4PSIyOC41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIGN5PSIxOCIvPgogPGNpcmNsZSBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIg'+
			'c3Ryb2tlPSIjYzJlODEyIiByPSIxLjUiIHN0cm9rZS13aWR0aD0iMS4yNSIgY3g9IjcuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBjeT0iMTgiLz4KPC9zdmc+Cg==';
		me._btn_thumbnails_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_thumbnails_icon_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_thumbnails_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_thumbnails_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_thumbnails_phone.appendChild(me._btn_thumbnails_icon_phone);
		me._button_container_phone.appendChild(me._btn_thumbnails_phone);
		el=me._btn_languages_phone=document.createElement('div');
		el.ggId="btn_languages_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_languages_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_languages_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._btn_languages_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_languages_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_languages_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_languages_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_languages_phone.style.left=(20+deltaX) + 'px';
					me._btn_languages_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_languages_phone.logicBlock_position();
		me._btn_languages_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getProjectTranslations().length > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_languages_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_languages_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_languages_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_languages_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_languages_phone.style.visibility=(Number(me._btn_languages_phone.style.opacity)>0||!me._btn_languages_phone.style.opacity)?'inherit':'hidden';
					me._btn_languages_phone.ggVisible=true;
				}
				else {
					me._btn_languages_phone.style.visibility="hidden";
					me._btn_languages_phone.ggVisible=false;
				}
			}
		}
		me._btn_languages_phone.logicBlock_visible();
		me._btn_languages_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_languages_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_languages_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_languages_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_languages_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_languages_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_languages_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_languages_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_languages_phone.logicBlock_backgroundcolor();
		me._btn_languages_phone.onclick=function (e) {
			player.setVariableValue('vis_languages', !player.getVariableValue('vis_languages'));
		}
		me._btn_languages_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_languages_phone']=true;
			me._btn_languages_phone.logicBlock_backgroundcolor();
		}
		me._btn_languages_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_languages_phone']=false;
			me._btn_languages_phone.logicBlock_backgroundcolor();
		}
		me._btn_languages_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_languages_icon_phone=document.createElement('div');
		els=me._btn_languages_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8ZyBpZD0iTGF5ZXJfMV8wMDAwMDAwOTU1MzU2OTQ2NDI2OTY1MjEzMDAwMDAwMjEwNzE1MzEyNzMyMjYzNzIzOV8iPgogIDxwYXRoIGQ9IiAgIE0zNC45LDE4YzAsOS4yLTcuNSwxNi43LTE2LjcsMTYuN0gxLjVsNC45LTQuOWMtMy0zLTQuOS03LjItNC45LTExLjhDMS42LDguOCw5LDEuMywxOC4yLDEuM1MzNC45LDguOCwzNC45LDE4eiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8'+
			'L2c+CiA8ZyBpZD0iRWJlbmVfMSI+CiAgPGxpbmUgeDI9IjE3LjYiIHkyPSIxMS4zIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojYzJlODEyO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIxMS4zIiB4MT0iOC40Ii8+CiAgPGxpbmUgeDI9IjEzIiB5Mj0iMTEuMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybG'+
			'ltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iOC4zIiB4MT0iMTMiLz4KICA8cGF0aCBkPSIgICBNOS40LDIwLjRjMy43LTIuMSw2LTUuMSw3LjMtOS4xIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojYzJlODEyO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8cGF0aCBkPSIgICBNMTAuOSwxNC43YzEuNiwyLjcsMy42LDQuMyw1LjgsNS43IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojYzJlODEyO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1s'+
			'aW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8cG9seWxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIiBwb2ludHM9IiAgIDE3LjgsMjYuNiAyMi40LDE1LjkgMjcsMjYuNiAgIi8+CiAgPGxpbmUgeDI9IjI2LjIiIHkyPSIyNC43IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojYzJlODEyO3N0cm9rZS13aW'+
			'R0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyNC43IiB4MT0iMTguNiIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_languages_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_languages_icon_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_languages_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_languages_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_languages_phone.appendChild(me._btn_languages_icon_phone);
		me._button_container_phone.appendChild(me._btn_languages_phone);
		el=me._btn_fullscreen_phone=document.createElement('div');
		el.ggId="btn_fullscreen_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_fullscreen_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (JSON.stringify(me._btn_fullscreen_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_fullscreen_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_fullscreen_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_fullscreen_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_fullscreen_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_fullscreen_phone.style.left=(20+deltaX) + 'px';
					me._btn_fullscreen_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_fullscreen_phone.logicBlock_position();
		me._btn_fullscreen_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_fullscreen_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen_phone.style.visibility=(Number(me._btn_fullscreen_phone.style.opacity)>0||!me._btn_fullscreen_phone.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen_phone.ggVisible=true;
				}
				else {
					me._btn_fullscreen_phone.style.visibility="hidden";
					me._btn_fullscreen_phone.ggVisible=false;
				}
			}
		}
		me._btn_fullscreen_phone.logicBlock_visible();
		me._btn_fullscreen_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_fullscreen_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_fullscreen_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_fullscreen_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_fullscreen_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_fullscreen_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_fullscreen_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_fullscreen_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_fullscreen_phone.logicBlock_backgroundcolor();
		me._btn_fullscreen_phone.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._btn_fullscreen_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_fullscreen_phone']=true;
			me._btn_fullscreen_phone.logicBlock_backgroundcolor();
		}
		me._btn_fullscreen_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_fullscreen_phone']=false;
			me._btn_fullscreen_phone.logicBlock_backgroundcolor();
		}
		me._btn_fullscreen_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_fullscreen_exit_phone=document.createElement('div');
		els=me._btn_fullscreen_exit_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5bGluZSBzdHJva2'+
			'U9IiNjMmU4MTIiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcG9pbnRzPSI2LDIxIDE1LDIxICYjeGE7JiN4OTsxNSwzMCAiLz4KIDxwb2x5bGluZSBzdHJva2U9IiNjMmU4MTIiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcG9pbnRzPSIzMCwxNSAyMSwxNSAmI3hhOyYjeDk7MjEsNiAiLz4KIDxsaW5lIHgyPSIzMS41IiBzdHJva2Ut'+
			'b3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgeDE9IjIxIiBzdHJva2U9IiNjMmU4MTIiIHkyPSI0LjUiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB5MT0iMTUiIGZpbGw9Im5vbmUiLz4KIDxsaW5lIHgyPSIxNSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHgxPSI0LjUiIHN0cm9rZT0iI2MyZTgxMiIgeTI9IjIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeTE9IjMxLjUiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg==';
		me._btn_fullscreen_exit_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_fullscreen_exit_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen_exit_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_fullscreen_exit_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen_exit_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen_exit_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen_exit_phone.style.transition='';
				if (me._btn_fullscreen_exit_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen_exit_phone.style.visibility=(Number(me._btn_fullscreen_exit_phone.style.opacity)>0||!me._btn_fullscreen_exit_phone.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen_exit_phone.ggVisible=true;
				}
				else {
					me._btn_fullscreen_exit_phone.style.visibility="hidden";
					me._btn_fullscreen_exit_phone.ggVisible=false;
				}
			}
		}
		me._btn_fullscreen_exit_phone.logicBlock_visible();
		me._btn_fullscreen_exit_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_fullscreen_phone.appendChild(me._btn_fullscreen_exit_phone);
		el=me._btn_fullscreen_enter_phone=document.createElement('div');
		els=me._btn_fullscreen_enter_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5bGluZSBzdHJva2'+
			'U9IiNjMmU4MTIiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcG9pbnRzPSIyMi41LDQuNSAmI3hhOyYjeDk7MzEuNSw0LjUgMzEuNSwxMy41ICIvPgogPHBvbHlsaW5lIHN0cm9rZT0iI2MyZTgxMiIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjEzLjUsMzEuNSAmI3hhOyYjeDk7NC41LDMxLjUgNC41LDIyLjUgIi8+CiA8'+
			'bGluZSB4Mj0iMjEiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4MT0iMzEuNSIgc3Ryb2tlPSIjYzJlODEyIiB5Mj0iMTUiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB5MT0iNC41IiBmaWxsPSJub25lIi8+CiA8bGluZSB4Mj0iMTUiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4MT0iNC41IiBzdHJva2U9IiNjMmU4MTIiIHkyPSIyMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHkxPSIzMS41IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo=';
		me._btn_fullscreen_enter_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_fullscreen_enter_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen_enter_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_fullscreen_enter_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen_enter_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen_enter_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen_enter_phone.style.transition='';
				if (me._btn_fullscreen_enter_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen_enter_phone.style.visibility="hidden";
					me._btn_fullscreen_enter_phone.ggVisible=false;
				}
				else {
					me._btn_fullscreen_enter_phone.style.visibility=(Number(me._btn_fullscreen_enter_phone.style.opacity)>0||!me._btn_fullscreen_enter_phone.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen_enter_phone.ggVisible=true;
				}
			}
		}
		me._btn_fullscreen_enter_phone.logicBlock_visible();
		me._btn_fullscreen_enter_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_fullscreen_phone.appendChild(me._btn_fullscreen_enter_phone);
		me._button_container_phone.appendChild(me._btn_fullscreen_phone);
		el=me._btn_gyro_phone=document.createElement('div');
		el.ggId="btn_gyro_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_gyro_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_gyro_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (JSON.stringify(me._btn_gyro_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_gyro_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_gyro_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_gyro_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_gyro_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_gyro_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_gyro_phone.style.left=(20+deltaX) + 'px';
					me._btn_gyro_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_gyro_phone.logicBlock_position();
		me._btn_gyro_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_gyro_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_gyro_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_gyro_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_gyro_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_gyro_phone.style.visibility=(Number(me._btn_gyro_phone.style.opacity)>0||!me._btn_gyro_phone.style.opacity)?'inherit':'hidden';
					me._btn_gyro_phone.ggVisible=true;
				}
				else {
					me._btn_gyro_phone.style.visibility="hidden";
					me._btn_gyro_phone.ggVisible=false;
				}
			}
		}
		me._btn_gyro_phone.logicBlock_visible();
		me._btn_gyro_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_gyro_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_gyro_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_gyro_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_gyro_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_gyro_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_gyro_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_gyro_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_gyro_phone.logicBlock_backgroundcolor();
		me._btn_gyro_phone.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._btn_gyro_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_gyro_phone']=true;
			me._btn_gyro_phone.logicBlock_backgroundcolor();
		}
		me._btn_gyro_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_gyro_phone']=false;
			me._btn_gyro_phone.logicBlock_backgroundcolor();
		}
		me._btn_gyro_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_gyro_on_icon_phone=document.createElement('div');
		els=me._btn_gyro_on_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzJfMV8iIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4yNTU4O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0LjAxODY7fSYjeGQ7Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2Ut'+
			'bGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8ZWxsaXBzZSBjbGFzcz0ic3QwIiByeT0iNi4xIiByeD0iMTYuNSIgY3g9IjE4IiBjeT0iMTgiLz4KIDxlbGxpcHNlIGNsYXNzPSJzdDEiIHJ5PSI3LjYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMzc4MiAtMC45MjU3IDAuOTI1NyAwLjM3ODIgLTUuMzM0OSAyNy44OTcxKSIgcng9IjE2LjYiIGN4PSIxOC4xIiBjeT0iMTcuOSIvPgogPGxpbmUgY2xhc3M9InN0MiIgeDI9IjE4IiB5Mj0iMTgiIHkxPSIxOCIgeDE9IjE4Ii8+Cjwvc3ZnPgo=';
		me._btn_gyro_on_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_gyro_on_icon_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_gyro_on_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_gyro_on_icon_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_gyro_on_icon_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_gyro_on_icon_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_gyro_on_icon_phone.style.transition='';
				if (me._btn_gyro_on_icon_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_gyro_on_icon_phone.style.visibility="hidden";
					me._btn_gyro_on_icon_phone.ggVisible=false;
				}
				else {
					me._btn_gyro_on_icon_phone.style.visibility=(Number(me._btn_gyro_on_icon_phone.style.opacity)>0||!me._btn_gyro_on_icon_phone.style.opacity)?'inherit':'hidden';
					me._btn_gyro_on_icon_phone.ggVisible=true;
				}
			}
		}
		me._btn_gyro_on_icon_phone.logicBlock_visible();
		me._btn_gyro_on_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_gyro_phone.appendChild(me._btn_gyro_on_icon_phone);
		el=me._btn_gyro_off_icon_phone=document.createElement('div');
		els=me._btn_gyro_off_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzJfY29weSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2IDM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLz'+
			'IwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojYzJlODEyO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9JiN4ZDsKPC9zdHlsZT4KIDxsaW5lIGNsYXNzPSJzdDAiIHgyPSIzNC41IiB5Mj0iMzQuNSIgeTE9IjEuNSIgeDE9IjEuNSIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjcsMjMuN2MtMS45LDAuMy0zLjgsMC40LTUuNywwLjRjLTkuMSwwLTE2LjUtMi43LTE2LjUtNi4xYzAtMi42LDQuNS00LjksMTAuOC01LjciLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9'+
			'Ik0yMC41LDEyYzgsMC40LDE0LDMsMTQsNmMwLDEuNS0xLjUsMi45LTQsNCIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjYsNy4xYzIuOS0zLjYsNi4yLTUuNCw4LjYtNC40YzMuNCwxLjQsNC4xLDcuOCwxLjksMTUiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMy43LDIzLjdjLTMuNSw2LjgtOC42LDExLTEyLDkuNmMtMy45LTEuNi00LjItOS43LTAuOC0xOC4xYzAuNC0xLDAuOC0xLjksMS4zLTIuOCIvPgo8L3N2Zz4K';
		me._btn_gyro_off_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_gyro_off_icon_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_gyro_off_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_gyro_off_icon_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_gyro_off_icon_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_gyro_off_icon_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_gyro_off_icon_phone.style.transition='';
				if (me._btn_gyro_off_icon_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_gyro_off_icon_phone.style.visibility=(Number(me._btn_gyro_off_icon_phone.style.opacity)>0||!me._btn_gyro_off_icon_phone.style.opacity)?'inherit':'hidden';
					me._btn_gyro_off_icon_phone.ggVisible=true;
				}
				else {
					me._btn_gyro_off_icon_phone.style.visibility="hidden";
					me._btn_gyro_off_icon_phone.ggVisible=false;
				}
			}
		}
		me._btn_gyro_off_icon_phone.logicBlock_visible();
		me._btn_gyro_off_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_gyro_phone.appendChild(me._btn_gyro_off_icon_phone);
		me._button_container_phone.appendChild(me._btn_gyro_phone);
		el=me._btn_vr_phone=document.createElement('div');
		el.ggId="btn_vr_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_vr_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_vr_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (JSON.stringify(me._btn_vr_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_vr_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_vr_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_vr_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_vr_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_vr_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_vr_phone.ggConditionsTruePosition.includes(3)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_vr_phone.style.left=(20+deltaX) + 'px';
					me._btn_vr_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_vr_phone.logicBlock_position();
		me._btn_vr_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_vr_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_vr_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_vr_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_vr_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_vr_phone.style.visibility=(Number(me._btn_vr_phone.style.opacity)>0||!me._btn_vr_phone.style.opacity)?'inherit':'hidden';
					me._btn_vr_phone.ggVisible=true;
				}
				else {
					me._btn_vr_phone.style.visibility="hidden";
					me._btn_vr_phone.ggVisible=false;
				}
			}
		}
		me._btn_vr_phone.logicBlock_visible();
		me._btn_vr_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_vr_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_vr_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_vr_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_vr_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_vr_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_vr_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_vr_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_vr_phone.logicBlock_backgroundcolor();
		me._btn_vr_phone.onclick=function (e) {
			player.enterVR();
		}
		me._btn_vr_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_vr_phone']=true;
			me._btn_vr_phone.logicBlock_backgroundcolor();
		}
		me._btn_vr_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_vr_phone']=false;
			me._btn_vr_phone.logicBlock_backgroundcolor();
		}
		me._btn_vr_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_vr_icon_phone=document.createElement('div');
		els=me._btn_vr_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZT0iI2'+
			'MyZTgxMiIgZD0iTTYsMTIuN2gyNCYjeGE7JiN4OTtjMS43LDAsMywxLjEsMywyLjd2OS40YzAsMS43LTEuMywzLTMsM2gtNC42Yy0xLjEsMC0yLjEtMC42LTIuNy0xLjZsLTIuNi00LjVjLTAuMy0wLjYtMS0xLTEuNy0xaC0wLjljLTAuNywwLTEuMywwLjQtMS42LDAuOSYjeGE7JiN4OTtsLTIuOCw0LjZjLTAuNiwwLjktMS42LDEuNS0yLjYsMS41SDZjLTEuNywwLTMtMS4zLTMtM3YtOS40QzMsMTMuOCw0LjMsMTIuNyw2LDEyLjd6IiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0i'+
			'cm91bmQiLz4KIDxwb2x5bGluZSBzdHJva2U9IiNjMmU4MTIiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcG9pbnRzPSIxMy4yLDEyLjcgJiN4YTsmI3g5OzEzLjIsNC4yIDIyLjgsNC4yIDIyLjgsMTIuNyAiLz4KPC9zdmc+Cg==';
		me._btn_vr_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_vr_icon_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_vr_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_vr_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_vr_phone.appendChild(me._btn_vr_icon_phone);
		me._button_container_phone.appendChild(me._btn_vr_phone);
		el=me._btn_audio_phone=document.createElement('div');
		el.ggId="btn_audio_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_audio_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_audio_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (JSON.stringify(me._btn_audio_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_audio_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_audio_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_audio_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_audio_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_audio_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_audio_phone.ggConditionsTruePosition.includes(3)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_audio_phone.ggConditionsTruePosition.includes(4)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_audio_phone.style.left=(20+deltaX) + 'px';
					me._btn_audio_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_audio_phone.logicBlock_position();
		me._btn_audio_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getHasSounds() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_audio_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_audio_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_audio_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_audio_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_audio_phone.style.visibility=(Number(me._btn_audio_phone.style.opacity)>0||!me._btn_audio_phone.style.opacity)?'inherit':'hidden';
					me._btn_audio_phone.ggVisible=true;
				}
				else {
					me._btn_audio_phone.style.visibility="hidden";
					me._btn_audio_phone.ggVisible=false;
				}
			}
		}
		me._btn_audio_phone.logicBlock_visible();
		me._btn_audio_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_audio_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_audio_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_audio_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_audio_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_audio_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_audio_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_audio_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_audio_phone.logicBlock_backgroundcolor();
		me._btn_audio_phone.onclick=function (e) {
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
			player.toggleMuted("_all");
		}
		me._btn_audio_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_audio_phone']=true;
			me._btn_audio_phone.logicBlock_backgroundcolor();
		}
		me._btn_audio_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_audio_phone']=false;
			me._btn_audio_phone.logicBlock_backgroundcolor();
		}
		me._btn_audio_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_audio_on_phone=document.createElement('div');
		els=me._btn_audio_on_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5Z29uIHN0cm9rZT'+
			'0iI2MyZTgxMiIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjE2LjUsNy41ICYjeGE7JiN4OTs5LDEzLjUgMywxMy41IDMsMjIuNSA5LDIyLjUgMTYuNSwyOC41ICIvPgogPHBhdGggc3Ryb2tlPSIjYzJlODEyIiBkPSJNMjguNiw3LjQmI3hhOyYjeDk7YzUuOSw1LjksNS45LDE1LjQsMCwyMS4yIE0yMy4zLDEyLjdjMi45LDIuOSwyLjksNy43LDAsMTAuNiIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9'+
			'InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=';
		me._btn_audio_on_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_audio_on_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_audio_on_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_audio_on_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_audio_on_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_audio_on_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_audio_on_phone.style.transition='';
				if (me._btn_audio_on_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_audio_on_phone.style.visibility=(Number(me._btn_audio_on_phone.style.opacity)>0||!me._btn_audio_on_phone.style.opacity)?'inherit':'hidden';
					me._btn_audio_on_phone.ggVisible=true;
				}
				else {
					me._btn_audio_on_phone.style.visibility="hidden";
					me._btn_audio_on_phone.ggVisible=false;
				}
			}
		}
		me._btn_audio_on_phone.logicBlock_visible();
		me._btn_audio_on_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_audio_phone.appendChild(me._btn_audio_on_phone);
		el=me._btn_audio_off_phone=document.createElement('div');
		els=me._btn_audio_off_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5Z29uIHN0cm9rZT'+
			'0iI2MyZTgxMiIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjE2LjUsNy41ICYjeGE7JiN4OTs5LDEzLjUgMywxMy41IDMsMjIuNSA5LDIyLjUgMTYuNSwyOC41ICIvPgogPGxpbmUgeDI9IjI1LjUiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4MT0iMzQuNSIgc3Ryb2tlPSIjYzJlODEyIiB5Mj0iMjIuNSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHkxPSIxMy41IiBmaWxsPSJub25l'+
			'Ii8+CiA8bGluZSB4Mj0iMzQuNSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHgxPSIyNS41IiBzdHJva2U9IiNjMmU4MTIiIHkyPSIyMi41IiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeTE9IjEzLjUiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg==';
		me._btn_audio_off_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_audio_off_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_audio_off_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_audio_off_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_audio_off_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_audio_off_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_audio_off_phone.style.transition='';
				if (me._btn_audio_off_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_audio_off_phone.style.visibility="hidden";
					me._btn_audio_off_phone.ggVisible=false;
				}
				else {
					me._btn_audio_off_phone.style.visibility=(Number(me._btn_audio_off_phone.style.opacity)>0||!me._btn_audio_off_phone.style.opacity)?'inherit':'hidden';
					me._btn_audio_off_phone.ggVisible=true;
				}
			}
		}
		me._btn_audio_off_phone.logicBlock_visible();
		me._btn_audio_off_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_audio_phone.appendChild(me._btn_audio_off_phone);
		me._button_container_phone.appendChild(me._btn_audio_phone);
		el=me._btn_share_phone=document.createElement('div');
		el.ggId="btn_share_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_share_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_share_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (JSON.stringify(me._btn_share_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_share_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_share_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_share_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_share_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_share_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_share_phone.ggConditionsTruePosition.includes(3)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_share_phone.ggConditionsTruePosition.includes(4)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_share_phone.ggConditionsTruePosition.includes(5)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_share_phone.style.left=(20+deltaX) + 'px';
					me._btn_share_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_share_phone.logicBlock_position();
		me._btn_share_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_share') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_share_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_share_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_share_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_share_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_share_phone.style.visibility=(Number(me._btn_share_phone.style.opacity)>0||!me._btn_share_phone.style.opacity)?'inherit':'hidden';
					me._btn_share_phone.ggVisible=true;
				}
				else {
					me._btn_share_phone.style.visibility="hidden";
					me._btn_share_phone.ggVisible=false;
				}
			}
		}
		me._btn_share_phone.logicBlock_visible();
		me._btn_share_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_share_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_share_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_share_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_share_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_share_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_share_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_share_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_share_phone.logicBlock_backgroundcolor();
		me._btn_share_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_share_phone']=true;
			me._btn_share_phone.logicBlock_backgroundcolor();
		}
		me._btn_share_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_share_phone']=false;
			me._btn_share_phone.logicBlock_backgroundcolor();
		}
		me._btn_share_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._share_btns_container_phone=document.createElement('div');
		el.ggId="share_btns_container_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 138px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share_btns_container_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share_btns_container_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_copy_phone=document.createElement('div');
		els=me._btn_copy_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZT0iI2'+
			'MyZTgxMiIgZD0iTTE2LjUsMTMuNUgzMCYjeGE7JiN4OTtjMS43LDAsMywxLjMsMywzVjMwYzAsMS43LTEuMywzLTMsM0gxNi41Yy0xLjcsMC0zLTEuMy0zLTNWMTYuNUMxMy41LDE0LjgsMTQuOCwxMy41LDE2LjUsMTMuNXoiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogPHBhdGggc3Ryb2tlPSIjYzJlODEyIiBkPSJNNy41LDIyLjVINiYjeGE7JiN4OTtjLTEuNywwLTMtMS4zLTMtM1Y2YzAtMS43LDEuMy0zLDMtM2gxMy41YzEuNywwLDMsMS4zLDMsM3YxLjUi'+
			'IHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K';
		me._btn_copy_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_copy_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_copy_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_copy_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_share_copy') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (JSON.stringify(me._btn_copy_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_copy_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_copy_phone.style.transition='left 0s, top 0s';
				if (me._btn_copy_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 38;
				}
				if (me._btn_copy_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 12;
				}
				if (me._btn_copy_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 38;
				}
				if (me._btn_copy_phone.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 12;
				}
					me._btn_copy_phone.style.left = 'calc(50% - (38px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._btn_copy_phone.style.top=(0+deltaY) + 'px';
			}
		}
		me._btn_copy_phone.logicBlock_position();
		me._btn_copy_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_copy_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_copy_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_copy_phone.style.transition='left 0s, top 0s';
				if (me._btn_copy_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_copy_phone.style.visibility=(Number(me._btn_copy_phone.style.opacity)>0||!me._btn_copy_phone.style.opacity)?'inherit':'hidden';
					me._btn_copy_phone.ggVisible=true;
				}
				else {
					me._btn_copy_phone.style.visibility="hidden";
					me._btn_copy_phone.ggVisible=false;
				}
			}
		}
		me._btn_copy_phone.logicBlock_visible();
		me._btn_copy_phone.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + player.getCurrentNode() + "," + (Math.round(player.getPan() * 100) / 100) + "," + (Math.round(player.getTilt() * 100) / 100) + "," + (Math.round(player.getFov() * 100) / 100) + "," + player.getProjection();

dummy = document.createElement('input');
document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);
alert("The current view has been copied.");
		}
		me._btn_copy_phone.ggUpdatePosition=function (useTransition) {
		}
		me._share_btns_container_phone.appendChild(me._btn_copy_phone);
		el=me._btn_twitter_phone=document.createElement('div');
		els=me._btn_twitter_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyOCAyOCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOCAyODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNjMmU4MTI7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2LDEyLjNsNy45LTkuMUgyMmwtNi44LDcuOUw5LjcsMy4ySDMuNGw4LjIsMTJsLTguMiw5LjZoMS45bDcuMi04LjRsNS44LDguNGg2LjNMMTYsMTIuM0wxNiwxMi4zeiAgIE0xMy40LDE1LjNsLTAuOC0xLjJMNiw0LjZoMi45bDUuNCw3LjdsMC44LDEuMmw3LDEwaC0yLjlMMTMuNCwxNS4zTDEzLjQsMTUuM3oiLz4KPC9zdmc+Cg==';
		me._btn_twitter_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_twitter_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_twitter_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_twitter_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_share_twitter') == true)) && 
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (JSON.stringify(me._btn_twitter_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_twitter_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_twitter_phone.style.transition='left 0s, top 0s';
				if (me._btn_twitter_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 38;
				}
				if (me._btn_twitter_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 12;
				}
					me._btn_twitter_phone.style.left = 'calc(50% - (38px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._btn_twitter_phone.style.top=(0+deltaY) + 'px';
			}
		}
		me._btn_twitter_phone.logicBlock_position();
		me._btn_twitter_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_twitter_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_twitter_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_twitter_phone.style.transition='left 0s, top 0s';
				if (me._btn_twitter_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_twitter_phone.style.visibility=(Number(me._btn_twitter_phone.style.opacity)>0||!me._btn_twitter_phone.style.opacity)?'inherit':'hidden';
					me._btn_twitter_phone.ggVisible=true;
				}
				else {
					me._btn_twitter_phone.style.visibility="hidden";
					me._btn_twitter_phone.ggVisible=false;
				}
			}
		}
		me._btn_twitter_phone.logicBlock_visible();
		me._btn_twitter_phone.onclick=function (e) {
			window.open('http://twitter.com/share?url=' + location.href);
		}
		me._btn_twitter_phone.ggUpdatePosition=function (useTransition) {
		}
		me._share_btns_container_phone.appendChild(me._btn_twitter_phone);
		el=me._btn_facebook_phone=document.createElement('div');
		els=me._btn_facebook_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZT0iI2'+
			'MyZTgxMiIgZD0iTTI3LDNoLTQuNSYjeGE7JiN4OTtDMTguNCwzLDE1LDYuNCwxNSwxMC41VjE1aC00LjV2NkgxNXYxMmg2VjIxaDQuNWwxLjUtNmgtNnYtNC41QzIxLDkuNywyMS43LDksMjIuNSw5SDI3VjN6IiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==';
		me._btn_facebook_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_facebook_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_facebook_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_facebook_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_facebook_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_facebook_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_facebook_phone.style.transition='';
				if (me._btn_facebook_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_facebook_phone.style.visibility=(Number(me._btn_facebook_phone.style.opacity)>0||!me._btn_facebook_phone.style.opacity)?'inherit':'hidden';
					me._btn_facebook_phone.ggVisible=true;
				}
				else {
					me._btn_facebook_phone.style.visibility="hidden";
					me._btn_facebook_phone.ggVisible=false;
				}
			}
		}
		me._btn_facebook_phone.logicBlock_visible();
		me._btn_facebook_phone.onclick=function (e) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
		}
		me._btn_facebook_phone.ggUpdatePosition=function (useTransition) {
		}
		me._share_btns_container_phone.appendChild(me._btn_facebook_phone);
		me._btn_share_phone.appendChild(me._share_btns_container_phone);
		el=me._btn_share_icon_container_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_share_icon_container_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_share_icon_container_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_share_icon_container_phone.onclick=function (e) {
			player.setVariableValue('vis_share', !player.getVariableValue('vis_share'));
		}
		me._btn_share_icon_container_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_share_icon_phone=document.createElement('div');
		els=me._btn_share_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxjaXJjbGUgc3Ryb2tlLW'+
			'9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2MyZTgxMiIgcj0iNC41IiBzdHJva2Utd2lkdGg9IjEuMjUiIGN4PSIyNi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIGN5PSI3LjUiLz4KIDxjaXJjbGUgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iI2MyZTgxMiIgcj0iNC41IiBzdHJva2Utd2lkdGg9IjEuMjUiIGN4PSI4LjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgY3k9IjE4Ii8+CiA8Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5k'+
			'IiBzdHJva2U9IiNjMmU4MTIiIHI9IjQuNSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBjeD0iMjYuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBjeT0iMjguNSIvPgogPGxpbmUgeDI9IjIyLjMiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4MT0iMTIuMSIgc3Ryb2tlPSIjYzJlODEyIiB5Mj0iMjYuMiIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHkxPSIyMC4zIiBmaWxsPSJub25lIi8+CiA8bGluZSB4Mj0iMTIuMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHgxPSIyMi4zIi'+
			'BzdHJva2U9IiNjMmU4MTIiIHkyPSIxNS43IiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeTE9IjkuOCIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K';
		me._btn_share_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_share_icon_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 38px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_share_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_share_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_share_icon_container_phone.appendChild(me._btn_share_icon_phone);
		me._btn_share_phone.appendChild(me._btn_share_icon_container_phone);
		me._button_container_phone.appendChild(me._btn_share_phone);
		el=me._btn_map_phone=document.createElement('div');
		el.ggId="btn_map_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_map_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (
				((player.getVariableValue('opt_share') == true))
			)
			{
				newConditionsTruePosition.push(6);
			}
			if (JSON.stringify(me._btn_map_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_map_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_map_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_map_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_map_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_map_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_map_phone.ggConditionsTruePosition.includes(3)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_map_phone.ggConditionsTruePosition.includes(4)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_map_phone.ggConditionsTruePosition.includes(5)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_map_phone.ggConditionsTruePosition.includes(6)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_map_phone.style.left=(20+deltaX) + 'px';
					me._btn_map_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_map_phone.logicBlock_position();
		me._btn_map_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_map_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_map_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_map_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_map_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_map_phone.style.visibility=(Number(me._btn_map_phone.style.opacity)>0||!me._btn_map_phone.style.opacity)?'inherit':'hidden';
					me._btn_map_phone.ggVisible=true;
				}
				else {
					me._btn_map_phone.style.visibility="hidden";
					me._btn_map_phone.ggVisible=false;
				}
			}
		}
		me._btn_map_phone.logicBlock_visible();
		me._btn_map_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_map_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_map_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_map_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_map_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_map_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_map_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_map_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_map_phone.logicBlock_backgroundcolor();
		me._btn_map_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_map_phone']=true;
			me._btn_map_phone.logicBlock_backgroundcolor();
		}
		me._btn_map_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_map_phone']=false;
			me._btn_map_phone.logicBlock_backgroundcolor();
		}
		me._btn_map_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_map_icon_container_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_map_icon_container_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map_icon_container_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_map_icon_container_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_map', true);
		}
		me._btn_map_icon_container_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_map_icon_phone=document.createElement('div');
		els=me._btn_map_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzEuNSwxNUMzMS41LDI1LjUsMTgsMzQuNSwxOCwzNC41UzQuNSwyNS41LDQuNSwxNWMwLTcuNSw2LTEzLjUsMTMuNS0xMy41UzMxLjUsNy41LDMxLjUsMTV6Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIHI9IjQuNSIgY3g9IjE4IiBjeT0iMTUiLz4KPC9zdmc+Cg==';
		me._btn_map_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_map_icon_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_map_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_map_icon_container_phone.appendChild(me._btn_map_icon_phone);
		me._btn_map_phone.appendChild(me._btn_map_icon_container_phone);
		me._button_container_phone.appendChild(me._btn_map_phone);
		el=me._btn_floorplan_phone=document.createElement('div');
		el.ggId="btn_floorplan_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_floorplan_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (
				((player.getVariableValue('opt_share') == true))
			)
			{
				newConditionsTruePosition.push(6);
			}
			if (
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newConditionsTruePosition.push(7);
			}
			if (JSON.stringify(me._btn_floorplan_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_floorplan_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_floorplan_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(3)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(4)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(5)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(6)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_floorplan_phone.ggConditionsTruePosition.includes(7)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_floorplan_phone.style.left=(20+deltaX) + 'px';
					me._btn_floorplan_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_floorplan_phone.logicBlock_position();
		me._btn_floorplan_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_floorplan_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_floorplan_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_floorplan_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_floorplan_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_floorplan_phone.style.visibility=(Number(me._btn_floorplan_phone.style.opacity)>0||!me._btn_floorplan_phone.style.opacity)?'inherit':'hidden';
					me._btn_floorplan_phone.ggVisible=true;
				}
				else {
					me._btn_floorplan_phone.style.visibility="hidden";
					me._btn_floorplan_phone.ggVisible=false;
				}
			}
		}
		me._btn_floorplan_phone.logicBlock_visible();
		me._btn_floorplan_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_floorplan_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_floorplan_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_floorplan_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_floorplan_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_floorplan_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_floorplan_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_floorplan_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_floorplan_phone.logicBlock_backgroundcolor();
		me._btn_floorplan_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_floorplan_phone']=true;
			me._btn_floorplan_phone.logicBlock_backgroundcolor();
		}
		me._btn_floorplan_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_floorplan_phone']=false;
			me._btn_floorplan_phone.logicBlock_backgroundcolor();
		}
		me._btn_floorplan_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_floorplan_icon_container_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_floorplan_icon_container_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan_icon_container_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_floorplan_icon_container_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_floorplan', true);
		}
		me._btn_floorplan_icon_container_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_floorplan_icon_phone=document.createElement('div');
		els=me._btn_floorplan_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5Z29uIHN0cm9rZT'+
			'0iI2MyZTgxMiIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjEuNSw5IDEuNSwzMyAmI3hhOyYjeDk7MTIsMjcgMjQsMzMgMzQuNSwyNyAzNC41LDMgMjQsOSAxMiwzICIvPgogPGxpbmUgeDI9IjEyIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgeDE9IjEyIiBzdHJva2U9IiNjMmU4MTIiIHkyPSIyNyIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHkxPSIzIiBmaWxsPSJub25lIi8+CiA8'+
			'bGluZSB4Mj0iMjQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB4MT0iMjQiIHN0cm9rZT0iI2MyZTgxMiIgeTI9IjMzIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeTE9IjkiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg==';
		me._btn_floorplan_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_floorplan_icon_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_floorplan_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_floorplan_icon_container_phone.appendChild(me._btn_floorplan_icon_phone);
		me._btn_floorplan_phone.appendChild(me._btn_floorplan_icon_container_phone);
		me._button_container_phone.appendChild(me._btn_floorplan_phone);
		el=me._btn_info_phone=document.createElement('div');
		el.ggId="btn_info_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_info_phone.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getIsTour() == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (
				((player.getVariableValue('opt_share') == true))
			)
			{
				newConditionsTruePosition.push(6);
			}
			if (
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newConditionsTruePosition.push(7);
			}
			if (
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newConditionsTruePosition.push(8);
			}
			if (JSON.stringify(me._btn_info_phone.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._btn_info_phone.ggConditionsTruePosition = newConditionsTruePosition;
				me._btn_info_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_info_phone.ggConditionsTruePosition.includes(0)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(1)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(2)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(3)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(4)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(5)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(6)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(7)) {
					deltaX += 70;
					deltaY += 0;
				}
				if (me._btn_info_phone.ggConditionsTruePosition.includes(8)) {
					deltaX += 70;
					deltaY += 0;
				}
					me._btn_info_phone.style.left=(20+deltaX) + 'px';
					me._btn_info_phone.style.bottom=(25+deltaY) + 'px';
			}
		}
		me._btn_info_phone.logicBlock_position();
		me._btn_info_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_info') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_info_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_info_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_info_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_info_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_info_phone.style.visibility=(Number(me._btn_info_phone.style.opacity)>0||!me._btn_info_phone.style.opacity)?'inherit':'hidden';
					me._btn_info_phone.ggVisible=true;
				}
				else {
					me._btn_info_phone.style.visibility="hidden";
					me._btn_info_phone.ggVisible=false;
				}
			}
		}
		me._btn_info_phone.logicBlock_visible();
		me._btn_info_phone.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btn_info_phone'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btn_info_phone.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btn_info_phone.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btn_info_phone.style.transition='left 0s, bottom 0s, background-color 100ms ease 0ms';
				if (me._btn_info_phone.ggCurrentLogicStateBackgroundColor == 0) {
					me._btn_info_phone.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._btn_info_phone.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._btn_info_phone.logicBlock_backgroundcolor();
		me._btn_info_phone.onmouseenter=function (e) {
			me.elementMouseOver['btn_info_phone']=true;
			me._btn_info_phone.logicBlock_backgroundcolor();
		}
		me._btn_info_phone.onmouseleave=function (e) {
			me.elementMouseOver['btn_info_phone']=false;
			me._btn_info_phone.logicBlock_backgroundcolor();
		}
		me._btn_info_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_info_icon_container_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="btn_info_icon_container_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info_icon_container_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_info_icon_container_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_info', true);
				me._info_popup_title_phone.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_popup_title_phone.ggUpdateText();
			me._info_popup_title_phone.ggTextDiv.scrollTop = 0;
				me._info_popup_text_phone.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_popup_text_phone.ggUpdateText();
			me._info_popup_text_phone.ggTextDiv.scrollTop = 0;
		}
		me._btn_info_icon_container_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_info_icon_phone=document.createElement('div');
		els=me._btn_info_icon_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIHI9IjE1IiBjeD0iMTgiIGN5PSIxOCIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDI9IjE4IiB5Mj0iMTgiIHkxPSIyNCIgeDE9IjE4Ii8+'+
			'CiA8bGluZSBjbGFzcz0ic3QxIiB4Mj0iMTgiIHkyPSIxMiIgeTE9IjEyIiB4MT0iMTgiLz4KPC9zdmc+Cg==';
		me._btn_info_icon_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_info_icon_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info_icon_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_info_icon_phone.ggUpdatePosition=function (useTransition) {
		}
		me._btn_info_icon_container_phone.appendChild(me._btn_info_icon_phone);
		me._btn_info_phone.appendChild(me._btn_info_icon_container_phone);
		me._button_container_phone.appendChild(me._btn_info_phone);
		me.divSkin.appendChild(me._button_container_phone);
		el=me._safe_area_project_title_phone=document.createElement('div');
		el.ggId="safe_area_project_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_project_title_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_project_title_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._project_title_phone=document.createElement('div');
		els=me._project_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="project_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text hepta_slab shadow_title";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(194,232,18,1);';
		hs+='cursor : default;';
		hs+='height : 120px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 110px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 25px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._project_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._project_title_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._project_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._project_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._project_title_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._project_title_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._project_title_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._project_title_phone.style.transition='';
				if (me._project_title_phone.ggCurrentLogicStateVisible == 0) {
					me._project_title_phone.style.visibility=(Number(me._project_title_phone.style.opacity)>0||!me._project_title_phone.style.opacity)?'inherit':'hidden';
					me._project_title_phone.ggVisible=true;
				}
				else {
					me._project_title_phone.style.visibility="hidden";
					me._project_title_phone.ggVisible=false;
				}
			}
		}
		me._project_title_phone.logicBlock_visible();
		me._project_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_project_title_phone.appendChild(me._project_title_phone);
		me.divSkin.appendChild(me._safe_area_project_title_phone);
		el=me._project_title=document.createElement('div');
		els=me._project_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="project_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text hepta_slab shadow_title";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(194,232,18,1);';
		hs+='cursor : default;';
		hs+='height : 75px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 125px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 60px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._project_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._project_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._project_title.ggUpdateText();
		});
		el.appendChild(els);
		me._project_title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._project_title.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_info') == true)) || 
				((player.getVariableValue('vis_map') == true)) || 
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._project_title.ggCurrentLogicStateSize != newLogicStateSize) {
				me._project_title.ggCurrentLogicStateSize = newLogicStateSize;
				me._project_title.style.transition='width 0s, height 0s';
				if (me._project_title.ggCurrentLogicStateSize == 0) {
					me._project_title.style.width='calc(70% - 75px)';
					me._project_title.style.height='75px';
					skin.updateSize(me._project_title);
				}
				else {
					me._project_title.style.width='calc(100% - 125px)';
					me._project_title.style.height='75px';
					skin.updateSize(me._project_title);
				}
			}
		}
		me._project_title.logicBlock_size();
		me._project_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._project_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._project_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._project_title.style.transition='width 0s, height 0s';
				if (me._project_title.ggCurrentLogicStateVisible == 0) {
					me._project_title.style.visibility=(Number(me._project_title.style.opacity)>0||!me._project_title.style.opacity)?'inherit':'hidden';
					me._project_title.ggVisible=true;
				}
				else {
					me._project_title.style.visibility="hidden";
					me._project_title.ggVisible=false;
				}
			}
		}
		me._project_title.logicBlock_visible();
		me._project_title.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._project_title);
		el=me._thumbnail_scroller=document.createElement('div');
		els=me._thumbnail_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 103px;';
		hs+='left : 50%;';
		hs+='margin-left : -91.5px;';
		hs+='margin-top : -51.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 183px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller.ggScrollPosX = (me._thumbnail_scroller__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller.ggScrollPosX = Math.max(me._thumbnail_scroller.ggScrollPosX, 0);
			me._thumbnail_scroller.ggScrollPosX = Math.min(me._thumbnail_scroller.ggScrollPosX, me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
			me._thumbnail_scroller__horScrollFg.style.left = me._thumbnail_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosX / (me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
			me._thumbnail_scroller__content.style.left = -(Math.round((me._thumbnail_scroller.ggContentWidth * (1.0 - me._thumbnail_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentLeftOffset + 'px';
			me._thumbnail_scroller.ggScrollPosXPercent = (me._thumbnail_scroller__horScrollFg.offsetLeft / me._thumbnail_scroller__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller.ggScrollPosX >= me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller.ggScrollPosX = Math.min(me._thumbnail_scroller.ggScrollPosX, me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller.ggScrollPosX <= 0)) {
					me._thumbnail_scroller.ggScrollPosX = Math.max(me._thumbnail_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller__horScrollFg.style.left = me._thumbnail_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosX / (me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
			me._thumbnail_scroller__content.style.left = -(Math.round((me._thumbnail_scroller.ggContentWidth * (1.0 - me._thumbnail_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentLeftOffset + 'px';
			me._thumbnail_scroller.ggScrollPosXPercent = (me._thumbnail_scroller__horScrollFg.offsetLeft / me._thumbnail_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller.ggScrollPosY = (me._thumbnail_scroller__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller.ggScrollPosY = Math.max(me._thumbnail_scroller.ggScrollPosY, 0);
			me._thumbnail_scroller.ggScrollPosY = Math.min(me._thumbnail_scroller.ggScrollPosY, me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
			me._thumbnail_scroller__vertScrollFg.style.top = me._thumbnail_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosY / (me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
			me._thumbnail_scroller__content.style.top = -(Math.round((me._thumbnail_scroller.ggContentHeight * (1.0 - me._thumbnail_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentTopOffset + 'px';
			me._thumbnail_scroller.ggScrollPosYPercent = (me._thumbnail_scroller__vertScrollFg.offsetTop / me._thumbnail_scroller__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller.ggScrollPosY >= me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller.ggScrollPosY = Math.min(me._thumbnail_scroller.ggScrollPosY, me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller.ggScrollPosY <= 0)) {
					me._thumbnail_scroller.ggScrollPosY = Math.max(me._thumbnail_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller__vertScrollFg.style.top = me._thumbnail_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosY / (me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
			me._thumbnail_scroller__content.style.top = -(Math.round((me._thumbnail_scroller.ggContentHeight * (1.0 - me._thumbnail_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentTopOffset + 'px';
			me._thumbnail_scroller.ggScrollPosYPercent = (me._thumbnail_scroller__vertScrollFg.offsetTop / me._thumbnail_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller.ggHPercentVisible);
					me._thumbnail_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller.clientWidth - (me._thumbnail_scroller.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller.clientWidth - (me._thumbnail_scroller.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_scroller.ggHPercentVisible);
					me._thumbnail_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller.ggVPercentVisible);
					me._thumbnail_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller.clientHeight - (me._thumbnail_scroller.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller.clientHeight - (me._thumbnail_scroller.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_scroller.ggVPercentVisible);
					me._thumbnail_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller.ggScrollByX(me._thumbnail_scroller.ggDragInertiaX);
				me._thumbnail_scroller.ggScrollByY(me._thumbnail_scroller.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller__content.onmouseup = null;
			me._thumbnail_scroller__content.onmousemove = null;
			me._thumbnail_scroller__content.ontouchend = null;
			me._thumbnail_scroller__content.ontouchmove = null;
			me._thumbnail_scroller__content.onpointerup = null;
			me._thumbnail_scroller__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_scroller.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller.ggDragStartY) > 10) me._thumbnail_scroller.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller.ggDragLastX) * me._thumbnail_scroller.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller.ggDragLastY) * me._thumbnail_scroller.ggVPercentVisible;
			me._thumbnail_scroller.ggDragInertiaX = -diffX;
			me._thumbnail_scroller.ggDragInertiaY = -diffY;
			me._thumbnail_scroller.ggDragLastX = eventX;
			me._thumbnail_scroller.ggDragLastY = eventY;
			me._thumbnail_scroller.ggScrollByX(-diffX);
			me._thumbnail_scroller.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller.ggDragLastX = me._thumbnail_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller.ggDragLastY = me._thumbnail_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller__content.onmouseup = me._thumbnail_scroller__content.mousetouchend;
			me._thumbnail_scroller__content.ontouchend = me._thumbnail_scroller__content.mousetouchend;
			me._thumbnail_scroller__content.onmousemove = me._thumbnail_scroller__content.mousetouchmove;
			me._thumbnail_scroller__content.ontouchmove = me._thumbnail_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_scroller__content.onpointerup = me._thumbnail_scroller__content.ontouchend;
				me._thumbnail_scroller__content.onpointermove = me._thumbnail_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_scroller__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller__content.mousetouchstart;
		}
		elHorScrollBg = me._thumbnail_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 700px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 700px; height: 5px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		me._thumbnail_scroller.ggScrollPosX = 0;
		me._thumbnail_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller.ggDragInertiaX *= 0.96;
					me._thumbnail_scroller.ggScrollByX(me._thumbnail_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnail_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_scroller.ggDragLastX;
				me._thumbnail_scroller.ggDragInertiaX = diffX;
				me._thumbnail_scroller.ggDragLastX = e.clientX;
				me._thumbnail_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller.ggDragInertiaX *= 0.96;
					me._thumbnail_scroller.ggScrollByX(me._thumbnail_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnail_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_scroller.ggDragLastX;
				me._thumbnail_scroller.ggDragInertiaX = diffX;
				me._thumbnail_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_scroller.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_scroller.ggScrollWidth;
			if (e.offsetX < me._thumbnail_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_scroller.ggScrollByXSmooth(30 * me._thumbnail_scroller.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 20px;';
		hs+='height : 130px;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_scroller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_scroller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_scroller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_scroller.style.transition='opacity 300ms ease 0ms';
				if (me._thumbnail_scroller.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_scroller.style.visibility=(Number(me._thumbnail_scroller.style.opacity)>0||!me._thumbnail_scroller.style.opacity)?'inherit':'hidden';
					me._thumbnail_scroller.ggVisible=true;
				}
				else {
					me._thumbnail_scroller.style.visibility="hidden";
					me._thumbnail_scroller.ggVisible=false;
				}
			}
		}
		me._thumbnail_scroller.logicBlock_visible();
		me._thumbnail_scroller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnails') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_scroller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_scroller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_scroller.style.transition='opacity 300ms ease 0ms';
				if (me._thumbnail_scroller.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_scroller.style.visibility=me._thumbnail_scroller.ggVisible?'inherit':'hidden';
					me._thumbnail_scroller.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_scroller.style.opacity == 0.0) { me._thumbnail_scroller.style.visibility="hidden"; } }, 305);
					me._thumbnail_scroller.style.opacity=0;
				}
			}
		}
		me._thumbnail_scroller.logicBlock_alpha();
		me._thumbnail_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_scroller__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller.ggHorScrollVisible = true;
				} else {
					me._thumbnail_scroller__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller.ggHorScrollVisible = false;
				}
				if(me._thumbnail_scroller.ggHorScrollVisible) {
					me._thumbnail_scroller.ggAvailableHeight = me._thumbnail_scroller.clientHeight - 5;
					if (me._thumbnail_scroller.ggVertScrollVisible) {
						me._thumbnail_scroller.ggAvailableWidth = me._thumbnail_scroller.clientWidth - 5;
						me._thumbnail_scroller.ggAvailableWidthWithScale = me._thumbnail_scroller.getBoundingClientRect().width - me._thumbnail_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_scroller.ggAvailableWidth = me._thumbnail_scroller.clientWidth;
						me._thumbnail_scroller.ggAvailableWidthWithScale = me._thumbnail_scroller.getBoundingClientRect().width;
					}
					me._thumbnail_scroller__horScrollBg.style.width = me._thumbnail_scroller.ggAvailableWidth + 'px';
					me._thumbnail_scroller.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_scroller.ggHPercentVisible > 1.0) me._thumbnail_scroller.ggHPercentVisible = 1.0;
					me._thumbnail_scroller.ggScrollWidth = Math.round(me._thumbnail_scroller__horScrollBg.offsetWidth * me._thumbnail_scroller.ggHPercentVisible);
					me._thumbnail_scroller__horScrollFg.style.width = me._thumbnail_scroller.ggScrollWidth + 'px';
					me._thumbnail_scroller.ggScrollPosX = me._thumbnail_scroller.ggScrollPosXPercent * me._thumbnail_scroller.ggAvailableWidth;
					me._thumbnail_scroller.ggScrollPosX = Math.min(me._thumbnail_scroller.ggScrollPosX, me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
					me._thumbnail_scroller__horScrollFg.style.left = me._thumbnail_scroller.ggScrollPosX + 'px';
					if (me._thumbnail_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller.ggScrollPosX / (me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
						me._thumbnail_scroller__content.style.left = -(Math.round((me._thumbnail_scroller.ggContentWidth * (1.0 - me._thumbnail_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_scroller.ggAvailableHeight = me._thumbnail_scroller.clientHeight;
					me._thumbnail_scroller.ggScrollPosX = 0;
					me._thumbnail_scroller.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_scroller.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller);
					me._thumbnail_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 182;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = me._thumbnail_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._thumbnail_cloner.ggNodeCount = me._thumbnail_cloner.ggNumFilterPassed;
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode && me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_scroller__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_scroller);
		el=me._languages_popup=document.createElement('div');
		el.ggId="languages_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((200px + 2px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((180px + 2px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_languages') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._languages_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._languages_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._languages_popup.style.transition='opacity 300ms ease 0ms, background-color 0s';
				if (me._languages_popup.ggCurrentLogicStateAlpha == 0) {
					me._languages_popup.style.visibility=me._languages_popup.ggVisible?'inherit':'hidden';
					me._languages_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._languages_popup.style.opacity == 0.0) { me._languages_popup.style.visibility="hidden"; } }, 305);
					me._languages_popup.style.opacity=0;
				}
			}
		}
		me._languages_popup.logicBlock_alpha();
		me._languages_popup.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['languages_popup'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._languages_popup.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._languages_popup.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._languages_popup.style.transition='opacity 300ms ease 0ms, background-color 0s';
				if (me._languages_popup.ggCurrentLogicStateBackgroundColor == 0) {
					me._languages_popup.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._languages_popup.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._languages_popup.logicBlock_backgroundcolor();
		me._languages_popup.onmouseenter=function (e) {
			me.elementMouseOver['languages_popup']=true;
			me._languages_popup.logicBlock_backgroundcolor();
		}
		me._languages_popup.onmouseleave=function (e) {
			me.elementMouseOver['languages_popup']=false;
			me._languages_popup.logicBlock_backgroundcolor();
		}
		me._languages_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._languages_scroller=document.createElement('div');
		els=me._languages_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 21px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 139px;';
		hs+="";
		els.setAttribute('style',hs);
		me._languages_scroller.ggScrollByX = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosX = (me._languages_scroller__horScrollFg.offsetLeft + diffX);
			me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
			me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
		}
		me._languages_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._languages_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._languages_scroller.ggScrollPosX >= me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth)) {
					me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._languages_scroller.ggScrollPosX <= 0)) {
					me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._languages_scroller.ggScrollByY = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosY = (me._languages_scroller__vertScrollFg.offsetTop + diffY);
			me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
			me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
		}
		me._languages_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._languages_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._languages_scroller.ggScrollPosY >= me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight)) {
					me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._languages_scroller.ggScrollPosY <= 0)) {
					me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._languages_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._languages_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 5 : 0))) * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._languages_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 5 : 0))) * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._languages_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._languages_scroller.ggDragInertiaX *= 0.96;
				me._languages_scroller.ggDragInertiaY *= 0.96;
				me._languages_scroller.ggScrollByX(me._languages_scroller.ggDragInertiaX);
				me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
				if (Math.abs(me._languages_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._languages_scroller__content.onmouseup = null;
			me._languages_scroller__content.onmousemove = null;
			me._languages_scroller__content.ontouchend = null;
			me._languages_scroller__content.ontouchmove = null;
			me._languages_scroller__content.onpointerup = null;
			me._languages_scroller__content.onpointermove = null;
			setTimeout(function() { me._languages_scroller.ggIsDragging = false; }, 100);
		}
		me._languages_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._languages_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._languages_scroller.ggDragStartY) > 10) me._languages_scroller.ggIsDragging = true;
			var diffX = (eventX - me._languages_scroller.ggDragLastX) * me._languages_scroller.ggHPercentVisible;
			var diffY = (eventY - me._languages_scroller.ggDragLastY) * me._languages_scroller.ggVPercentVisible;
			me._languages_scroller.ggDragInertiaX = -diffX;
			me._languages_scroller.ggDragInertiaY = -diffY;
			me._languages_scroller.ggDragLastX = eventX;
			me._languages_scroller.ggDragLastY = eventY;
			me._languages_scroller.ggScrollByX(-diffX);
			me._languages_scroller.ggScrollByY(-diffY);
		}
		me._languages_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._languages_scroller.ggDragLastX = me._languages_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._languages_scroller.ggDragLastY = me._languages_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._languages_scroller__content.onmouseup = me._languages_scroller__content.mousetouchend;
			me._languages_scroller__content.ontouchend = me._languages_scroller__content.mousetouchend;
			me._languages_scroller__content.onmousemove = me._languages_scroller__content.mousetouchmove;
			me._languages_scroller__content.ontouchmove = me._languages_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._languages_scroller__content.onpointerup = me._languages_scroller__content.ontouchend;
				me._languages_scroller__content.onpointermove = me._languages_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._languages_scroller__content.mousetouchstart;
		els.ontouchstart = me._languages_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._languages_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._languages_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 110px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._languages_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 110px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._languages_scroller.ggScrollPosY = 0;
		me._languages_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._languages_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaY *= 0.96;
					me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
					if (Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._languages_scroller.ggDragLastY;
				me._languages_scroller.ggDragInertiaY = diffY;
				me._languages_scroller.ggDragLastY = e.clientY;
				me._languages_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._languages_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaY *= 0.96;
					me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
					if (Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._languages_scroller.ggDragLastY;
				me._languages_scroller.ggDragInertiaY = diffY;
				me._languages_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._languages_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._languages_scroller.ggScrollHeight;
			if (e.offsetY < me._languages_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._languages_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._languages_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._languages_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._languages_scroller.ggScrollByYSmooth(30 * me._languages_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._languages_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="languages_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 110px;';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._languages_scroller.ggScrollPosY / me._languages_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._languages_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 5) || (!me._languages_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._languages_scroller__vertScrollBg.style.visibility = 'inherit';
					me._languages_scroller__vertScrollFg.style.visibility = 'inherit';
					me._languages_scroller.ggVertScrollVisible = true;
				} else {
					me._languages_scroller__vertScrollBg.style.visibility = 'hidden';
					me._languages_scroller__vertScrollFg.style.visibility = 'hidden';
					me._languages_scroller.ggVertScrollVisible = false;
				}
				if(me._languages_scroller.ggVertScrollVisible) {
					me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth - 5;
					if (me._languages_scroller.ggHorScrollVisible) {
						me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight - 5;
						me._languages_scroller.ggAvailableHeightWithScale = me._languages_scroller.getBoundingClientRect().height - me._languages_scroller__vertScrollBg.getBoundingClientRect().width;
						me._languages_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight;
						me._languages_scroller.ggAvailableHeightWithScale = me._languages_scroller.getBoundingClientRect().height;
						me._languages_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._languages_scroller__vertScrollBg.style.height = me._languages_scroller.ggAvailableHeight + 'px';
					me._languages_scroller.ggVPercentVisible = contentHeight != 0 ? me._languages_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._languages_scroller.ggVPercentVisible > 1.0) me._languages_scroller.ggVPercentVisible = 1.0;
					me._languages_scroller.ggScrollHeight =  Math.round(me._languages_scroller__vertScrollBg.offsetHeight * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller__vertScrollFg.style.height = me._languages_scroller.ggScrollHeight + 'px';
					me._languages_scroller.ggScrollPosY = me._languages_scroller.ggScrollPosYPercent * me._languages_scroller.ggAvailableHeight;
					me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
					me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
					if (me._languages_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
						me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth;
					me._languages_scroller.ggScrollPosY = 0;
					me._languages_scroller.ggScrollPosYPercent = 0.0;
					me._languages_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._languages_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._languages_scroller.ggHorScrollVisible || vertScrollWasVisible != me._languages_scroller.ggVertScrollVisible) {
					skin.updateSize(me._languages_scroller);
					me._languages_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._languages_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._languages_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 140;
		el.ggHeight = 22;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._languages_cloner.ggUpdating == true) return;
			me._languages_cloner.ggUpdating = true;
			var el=me._languages_cloner;
			var curNumCols = 0;
			curNumCols = me._languages_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if ((el.ggNumCols == curNumCols) && false) {
				me._languages_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._languages_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._languages_cloner.ggNumFilterPassed = el.ggTranslations.length;
			for (var i = 0; i < el.ggTranslations.length; i++) {
				var cItem = el.ggTranslations[i];
				var nodeId = {};
				nodeId['tag'] = cItem.langCode;
				nodeId['title'] = cItem.langName;
				if (!keepCloning || i < me._languages_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._languages_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._languages_cloner.ggWidth) + 'px';
				parameter.width=me._languages_cloner.ggWidth + 'px';
				parameter.height=me._languages_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_languages_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._languages_cloner.ggNodeCount = me._languages_cloner.ggNumFilterPassed;
			me._languages_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._languages_cloner.parentNode && me._languages_cloner.parentNode.classList.contains('ggskin_subelement') && me._languages_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._languages_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTranslations = [];
		el.ggId="languages_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 22px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._languages_cloner.childNodes.length; i++) {
				var child=me._languages_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._languages_cloner.ggUpdatePosition=function (useTransition) {
			me._languages_cloner.ggUpdate();
		}
		me._languages_scroller__content.appendChild(me._languages_cloner);
		me._languages_popup.appendChild(me._languages_scroller);
		el=me._languages_close=document.createElement('div');
		els=me._languages_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHdpZHRoPSIyMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjYzJlODEyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjIwIj4KIDxsaW5lIHgyPSI2IiB5Mj0iMTgiIHkxPSI2IiB4MT0iMTgiLz4KIDxsaW5lIHgyPSIxOCIgeTI9IjE4IiB5MT0iNiIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._languages_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="languages_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_close.onclick=function (e) {
			player.setVariableValue('vis_languages', false);
		}
		me._languages_close.ggUpdatePosition=function (useTransition) {
		}
		me._languages_popup.appendChild(me._languages_close);
		me.divSkin.appendChild(me._languages_popup);
		el=me._screen_tint=document.createElement('div');
		el.ggId="screen_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_url_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_pdf_popup') == true)) || 
				((player.getVariableValue('vis_video_youtube_popup') == true)) || 
				((player.getVariableValue('vis_video_vimeo_popup') == true)) || 
				((player.getVariableValue('vis_video_file_popup') == true)) || 
				((player.getVariableValue('vis_video_url_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screen_tint.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screen_tint.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screen_tint.style.transition='opacity 300ms ease 0ms';
				if (me._screen_tint.ggCurrentLogicStateAlpha == 0) {
					me._screen_tint.style.visibility=me._screen_tint.ggVisible?'inherit':'hidden';
					me._screen_tint.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screen_tint.style.opacity == 0.0) { me._screen_tint.style.visibility="hidden"; } }, 305);
					me._screen_tint.style.opacity=0;
				}
			}
		}
		me._screen_tint.logicBlock_alpha();
		me._screen_tint.onclick=function (e) {
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_video_youtube_popup', false);
			player.setVariableValue('vis_video_vimeo_popup', false);
			player.setVariableValue('vis_video_file_popup', false);
			player.setVariableValue('vis_video_url_popup', false);
		}
		me._screen_tint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screen_tint);
		el=me._ht_video_popup=document.createElement('div');
		el.ggId="ht_video_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_video_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube_popup') == true)) || 
				((player.getVariableValue('vis_video_vimeo_popup') == true)) || 
				((player.getVariableValue('vis_video_file_popup') == true)) || 
				((player.getVariableValue('vis_video_url_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_popup.style.transition='';
				if (me._ht_video_popup.ggCurrentLogicStateVisible == 0) {
					me._ht_video_popup.style.visibility=(Number(me._ht_video_popup.style.opacity)>0||!me._ht_video_popup.style.opacity)?'inherit':'hidden';
					me._ht_video_popup.ggVisible=true;
				}
				else {
					me._ht_video_popup.style.visibility="hidden";
					me._ht_video_popup.ggVisible=false;
				}
			}
		}
		me._ht_video_popup.logicBlock_visible();
		me._ht_video_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_popup_title=document.createElement('div');
		els=me._ht_video_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_popup_title.ggUpdateText();
		el.appendChild(els);
		me._ht_video_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_popup.appendChild(me._ht_video_popup_title);
		el=me._video_controller=document.createElement('div');
		el.ggId="video_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10%;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((360px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 360px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_popup') == true)) || 
				((player.getVariableValue('vis_video_url_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller.style.transition='';
				if (me._video_controller.ggCurrentLogicStateVisible == 0) {
					me._video_controller.style.visibility=(Number(me._video_controller.style.opacity)>0||!me._video_controller.style.opacity)?'inherit':'hidden';
					me._video_controller.ggVisible=true;
				}
				else {
					me._video_controller.style.visibility="hidden";
					me._video_controller.ggVisible=false;
				}
			}
		}
		me._video_controller.logicBlock_visible();
		me._video_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar=document.createElement('div');
		me._video_controller_seekbar__playhead=document.createElement('div');
		me._video_controller_seekbar.mediaEl = null;
		me._video_controller_seekbar.fromBufferSource = false;
		me._video_controller_seekbar.ggMediaId = '';
		el.ggId="video_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 3px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((3px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar || e.target == me._video_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
							if (me._video_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
							if (me._video_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar.onmousedown = me._video_controller_seekbar.ontouchstart = me._video_controller_seekbar.mouseTouchHandling;
		me._video_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar.style.background = '#3c3c3c';
				me._video_controller_seekbar.ggConnected = false;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.removeEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.removeEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar.mediaEl = player.getMediaObject(me._video_controller_seekbar.ggMediaId);
			if (me._video_controller_seekbar.mediaEl) {
				me._video_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				me._video_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar__playhead.style.left = '-13px';
				if (me._video_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.addEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.addEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_controller_seekbar.ggConnected) return;
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.mediaEl.readyState || (me._video_controller_seekbar.fromBufferSource && args && args['id'] == me._video_controller_seekbar.mediaEl.id)) {
					if (me._video_controller_seekbar.fromBufferSource) {
						var percent = me._video_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar.mediaEl.currentTime / me._video_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar.clientWidth - 2 * 2 + 1) * percent);
					playheadpos += -13;
					me._video_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (2 / me._video_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(100,100,100,1) ' + currPos +'%, rgba(100,100,100,1) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar.mediaEl.buffered.start(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar.mediaEl.buffered.end(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(100,100,100,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(60,60,60,1) ' + currPos + '%, rgba(60,60,60,1) ' + rangeStart + '%';
									gradientString += ', rgba(100,100,100,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(100,100,100,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(60,60,60,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar.appendChild(me._video_controller_seekbar__playhead);
		hs+='background : #3c3c3c;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 2px;';
		var hs_playhead = 'height: 30px;';
		hs_playhead += 'width: 30px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -13px;';
		hs_playhead += 'top: -13.5px;';
		hs_playhead += 'border-radius: 15px;';
		hs_playhead += cssPrefix + 'border-radius: 15px;';
		hs_playhead += 'background-color: rgba(194,232,18,1);';
		me._video_controller_seekbar.setAttribute('style', hs);
		me._video_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar.ggIsActive=function() {
			if (me._video_controller_seekbar.mediaEl != null) {
				return (me._video_controller_seekbar.mediaEl.paused == false && me._video_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar.updatePlayback();
		}
		me._video_controller.appendChild(me._video_controller_seekbar);
		me._ht_video_popup.appendChild(me._video_controller);
		el=me._ht_video_popup_youtube=document.createElement('div');
		me._ht_video_popup_youtube.seekbars = [];
			me._ht_video_popup_youtube.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._ht_video_popup_youtube.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_popup_youtube.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_popup_youtube.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_popup_youtube.hasChildNodes()) {
				me._ht_video_popup_youtube.removeChild(me._ht_video_popup_youtube.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_popup_youtube.ggVideoNotLoaded == false && me._ht_video_popup_youtube.ggDeactivate && player.isPlaying('ht_video_popup_youtube')) { me._ht_video_popup_youtube.ggDeactivate(); }
				me._ht_video_popup_youtube.ggVideoNotLoaded = true;
				return;
			}
			me._ht_video_popup_youtube.ggVideoNotLoaded = false;
			me._ht_video_popup_youtube__vid=document.createElement('iframe');
			me._ht_video_popup_youtube__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._ht_video_popup_youtube__vid.setAttribute('src', ggVideoUrl);
			me._ht_video_popup_youtube__vid.setAttribute('width', '100%');
			me._ht_video_popup_youtube__vid.setAttribute('height', '100%');
			me._ht_video_popup_youtube__vid.setAttribute('allow', 'autoplay');
			me._ht_video_popup_youtube__vid.setAttribute('allowfullscreen', 'true');
			me._ht_video_popup_youtube__vid.setAttribute('style', 'border:none; ; ;');
			me._ht_video_popup_youtube.appendChild(me._ht_video_popup_youtube__vid);
			me._ht_video_popup_youtube__vid.id = 'youtube-video';
			me._ht_video_popup_youtube.ggYoutubeApiReady = function() {
				me._ht_video_popup_youtube.ggApiPlayerType = 'youtube';
				me._ht_video_popup_youtube.ggApiPlayerReady = false;
				me._ht_video_popup_youtube.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._ht_video_popup_youtube.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._ht_video_popup_youtube.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._ht_video_popup_youtube.ggMediaEnded) {
								me._ht_video_popup_youtube.ggMediaEnded();
							}
							if (event.data == 1 && me._ht_video_popup_youtube.ggActivate) {
								me._ht_video_popup_youtube.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._ht_video_popup_youtube.ggDeactivate) {
								me._ht_video_popup_youtube.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'ht_video_popup_youtube' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._ht_video_popup_youtube.ggApiPlayer.unMute();
						if (args.state == 1) skin._ht_video_popup_youtube.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._ht_video_popup_youtube.ggApiPlayer.isMuted()) skin._ht_video_popup_youtube.ggApiPlayer.unMute(); else skin._ht_video_popup_youtube.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'ht_video_popup_youtube' || args.id == '_main') {
						if (args.type == 'set') skin._ht_video_popup_youtube.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._ht_video_popup_youtube.ggApiPlayer.setVolume(skin._ht_video_popup_youtube.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._ht_video_popup_youtube.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._ht_video_popup_youtube.ggYoutubeApiReady();}
		}
		el.ggId="ht_video_popup_youtube";
		el.ggDx=0;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(80% - 30px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 30px) + 0px) / 2) + 30px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_popup_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_popup_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_popup_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_popup_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_popup_youtube.style.transition='';
				if (me._ht_video_popup_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_popup_youtube.style.visibility=(Number(me._ht_video_popup_youtube.style.opacity)>0||!me._ht_video_popup_youtube.style.opacity)?'inherit':'hidden';
					if (me._ht_video_popup_youtube.ggVideoNotLoaded) {
						me._ht_video_popup_youtube.ggInitMedia(me._ht_video_popup_youtube.ggVideoSource);
					}
					me._ht_video_popup_youtube.ggVisible=true;
				}
				else {
					me._ht_video_popup_youtube.style.visibility="hidden";
					me._ht_video_popup_youtube.ggInitMedia('');
					me._ht_video_popup_youtube.ggVisible=false;
				}
			}
		}
		me._ht_video_popup_youtube.logicBlock_visible();
		me._ht_video_popup_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_popup.appendChild(me._ht_video_popup_youtube);
		el=me._ht_video_popup_vimeo=document.createElement('div');
		me._ht_video_popup_vimeo.seekbars = [];
		me._ht_video_popup_vimeo.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_popup_vimeo.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_popup_vimeo.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_popup_vimeo.hasChildNodes()) {
				me._ht_video_popup_vimeo.removeChild(me._ht_video_popup_vimeo.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_popup_vimeo.ggVideoNotLoaded == false && me._ht_video_popup_vimeo.ggDeactivate && player.isPlaying('ht_video_popup_vimeo')) { me._ht_video_popup_vimeo.ggDeactivate(); }
				me._ht_video_popup_vimeo.ggVideoNotLoaded = true;
				return;
			}
			me._ht_video_popup_vimeo.ggVideoNotLoaded = false;
			me._ht_video_popup_vimeo__vid=document.createElement('iframe');
			me._ht_video_popup_vimeo__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._ht_video_popup_vimeo__vid.setAttribute('src', ggVideoUrl);
			me._ht_video_popup_vimeo__vid.setAttribute('width', '100%');
			me._ht_video_popup_vimeo__vid.setAttribute('height', '100%');
			me._ht_video_popup_vimeo__vid.setAttribute('allow', 'autoplay');
			me._ht_video_popup_vimeo__vid.setAttribute('allowfullscreen', 'true');
			me._ht_video_popup_vimeo__vid.setAttribute('style', 'border:none; ; ;');
			me._ht_video_popup_vimeo.appendChild(me._ht_video_popup_vimeo__vid);
			me._ht_video_popup_vimeo.ggApiPlayerType = 'vimeo';
			me._ht_video_popup_vimeo.ggApiPlayer = new Vimeo.Player(me._ht_video_popup_vimeo__vid);
			if (player.getPlayerMuted()) me._ht_video_popup_vimeo.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'ht_video_popup_vimeo' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._ht_video_popup_vimeo.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._ht_video_popup_vimeo.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._ht_video_popup_vimeo.ggApiPlayer.getVolume() > 0.0) skin._ht_video_popup_vimeo.ggApiPlayer.setVolume(0); else skin._ht_video_popup_vimeo.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'ht_video_popup_vimeo' || args.id == '_main') {
					if (args.type == 'set') skin._ht_video_popup_vimeo.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._ht_video_popup_vimeo.ggApiPlayer.getVolume().then(function(volume) { skin._ht_video_popup_vimeo.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._ht_video_popup_vimeo.ggVideoSource = media;
		}
		el.ggId="ht_video_popup_vimeo";
		el.ggDx=0;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(80% - 30px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 30px) + 0px) / 2) + 30px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_popup_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_popup_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_vimeo_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_popup_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_popup_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_popup_vimeo.style.transition='';
				if (me._ht_video_popup_vimeo.ggCurrentLogicStateVisible == 0) {
					me._ht_video_popup_vimeo.style.visibility=(Number(me._ht_video_popup_vimeo.style.opacity)>0||!me._ht_video_popup_vimeo.style.opacity)?'inherit':'hidden';
					if (me._ht_video_popup_vimeo.ggVideoNotLoaded) {
						me._ht_video_popup_vimeo.ggInitMedia(me._ht_video_popup_vimeo.ggVideoSource);
					}
					me._ht_video_popup_vimeo.ggVisible=true;
				}
				else {
					me._ht_video_popup_vimeo.style.visibility="hidden";
					me._ht_video_popup_vimeo.ggInitMedia('');
					me._ht_video_popup_vimeo.ggVisible=false;
				}
			}
		}
		me._ht_video_popup_vimeo.logicBlock_visible();
		me._ht_video_popup_vimeo.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_popup.appendChild(me._ht_video_popup_vimeo);
		el=me._ht_video_popup_file=document.createElement('div');
		me._ht_video_popup_file.seekbars = [];
		me._ht_video_popup_file.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_popup_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_popup_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_popup_file.hasChildNodes()) {
				me._ht_video_popup_file.removeChild(me._ht_video_popup_file.lastChild);
			}
			if (me._ht_video_popup_file__vid) {
				me._ht_video_popup_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_popup_file.ggVideoNotLoaded == false && me._ht_video_popup_file.ggDeactivate && player.isPlaying('ht_video_popup_file')) { me._ht_video_popup_file.ggDeactivate(); }
				me._ht_video_popup_file.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('ht_video_popup_file');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._ht_video_popup_file.ggVideoNotLoaded = false;
			me._ht_video_popup_file__vid=document.createElement('video');
			me._ht_video_popup_file__vid.className='ggskin ggskin_video';
			me._ht_video_popup_file__vid.setAttribute('width', '100%');
			me._ht_video_popup_file__vid.setAttribute('height', '100%');
			me._ht_video_popup_file__vid.setAttribute('crossOrigin', 'anonymous');
			me._ht_video_popup_file__vid.setAttribute('controlsList', 'nodownload');
			me._ht_video_popup_file__vid.setAttribute('disablepictureinpicture', 'true');
			me._ht_video_popup_file__vid.setAttribute('oncontextmenu', 'return false;');
			me._ht_video_popup_file__vid.setAttribute('autoplay', '');
			me._ht_video_popup_file__source=document.createElement('source');
			me._ht_video_popup_file__source.setAttribute('src', media);
			me._ht_video_popup_file__vid.setAttribute('playsinline', 'playsinline');
			me._ht_video_popup_file__vid.setAttribute('style', ';');
			me._ht_video_popup_file__vid.style.outline = 'none';
			me._ht_video_popup_file__vid.appendChild(me._ht_video_popup_file__source);
			me._ht_video_popup_file.appendChild(me._ht_video_popup_file__vid);
			var videoEl = player.registerVideoElement('ht_video_popup_file', me._ht_video_popup_file__vid);
			videoEl.autoplay = true;
			player.changeVolume('ht_video_popup_file', 0.0);
			notifySeekbars();
			if (me._ht_video_popup_file.ggActivate) {
				me._ht_video_popup_file__vid.addEventListener('play', me._ht_video_popup_file.ggActivate);
			}
			if (me._ht_video_popup_file.ggDeactivate) {
				me._ht_video_popup_file__vid.addEventListener('ended', me._ht_video_popup_file.ggDeactivate);
				me._ht_video_popup_file__vid.addEventListener('pause', me._ht_video_popup_file.ggDeactivate);
			}
			me._ht_video_popup_file.ggVideoSource = media;
		}
		el.ggId="ht_video_popup_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='bottom : calc(10% + 50px);';
		hs+='height : calc(80% - 100px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_popup_file.ggIsActive=function() {
			if (me._ht_video_popup_file__vid != null) {
				return (me._ht_video_popup_file__vid.paused == false && me._ht_video_popup_file__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_popup_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_popup_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_popup_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_popup_file.style.transition='';
				if (me._ht_video_popup_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_popup_file.style.visibility=(Number(me._ht_video_popup_file.style.opacity)>0||!me._ht_video_popup_file.style.opacity)?'inherit':'hidden';
					if (me._ht_video_popup_file.ggVideoNotLoaded) {
						me._ht_video_popup_file.ggInitMedia(me._ht_video_popup_file.ggVideoSource);
					}
					me._ht_video_popup_file.ggVisible=true;
				}
				else {
					me._ht_video_popup_file.style.visibility="hidden";
					me._ht_video_popup_file.ggInitMedia('');
					me._ht_video_popup_file.ggVisible=false;
				}
			}
		}
		me._ht_video_popup_file.logicBlock_visible();
		me._ht_video_popup_file.onclick=function (e) {
			if (me._ht_video_popup_file.ggApiPlayer) {
				if (me._ht_video_popup_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._ht_video_popup_file.ggApiPlayer.getPlayerState() == 1) {
							me._ht_video_popup_file.ggApiPlayer.pauseVideo();
						} else {
							me._ht_video_popup_file.ggApiPlayer.playVideo();
						}
					};
					if (me._ht_video_popup_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_popup_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_popup_file.ggApiPlayerType == 'vimeo') {
					var promise = me._ht_video_popup_file.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._ht_video_popup_file.ggApiPlayer.play();
						} else {
							me._ht_video_popup_file.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("ht_video_popup_file","1");
			}
		}
		me._ht_video_popup_file.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._ht_video_popup_file_play.style.transition='none';
			} else {
				me._ht_video_popup_file_play.style.transition='all 300ms ease-out 0ms';
			}
			me._ht_video_popup_file_play.style.opacity='0';
			me._ht_video_popup_file_play.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._ht_video_popup_file_play.style.transition='none';
			} else {
				me._ht_video_popup_file_play.style.transition='all 300ms ease-out 0ms';
			}
			me._ht_video_popup_file_play.ggParameter.sx=1.5;me._ht_video_popup_file_play.ggParameter.sy=1.5;
			me._ht_video_popup_file_play.style.transform=parameterToTransform(me._ht_video_popup_file_play.ggParameter);
			setTimeout(function() {skin.updateSize(me._ht_video_popup_file_play);}, 350);
		}
		me._ht_video_popup_file.ggDeactivate=function () {
			me._ht_video_popup_file_play.style.transition='none';
			me._ht_video_popup_file_play.ggParameter.sx=1;me._ht_video_popup_file_play.ggParameter.sy=1;
			me._ht_video_popup_file_play.style.transform=parameterToTransform(me._ht_video_popup_file_play.ggParameter);
			skin.updateSize(me._ht_video_popup_file_play);
			me._ht_video_popup_file_play.style.transition='none';
			me._ht_video_popup_file_play.style.opacity='1';
			me._ht_video_popup_file_play.style.visibility=me._ht_video_popup_file_play.ggVisible?'inherit':'hidden';
		}
		me._ht_video_popup_file.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_popup.appendChild(me._ht_video_popup_file);
		el=me._ht_video_popup_file_play=document.createElement('div');
		el.ggId="ht_video_popup_file_play";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 2px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_popup_file_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_popup_file_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_popup_file_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_popup_file_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_popup_file_play.style.transition='background-color 100ms ease 0ms';
				if (me._ht_video_popup_file_play.ggCurrentLogicStateVisible == 0) {
					me._ht_video_popup_file_play.style.visibility=(Number(me._ht_video_popup_file_play.style.opacity)>0||!me._ht_video_popup_file_play.style.opacity)?'inherit':'hidden';
					me._ht_video_popup_file_play.ggVisible=true;
				}
				else {
					me._ht_video_popup_file_play.style.visibility="hidden";
					me._ht_video_popup_file_play.ggVisible=false;
				}
			}
		}
		me._ht_video_popup_file_play.logicBlock_visible();
		me._ht_video_popup_file_play.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_popup_file_play'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_popup_file_play.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_popup_file_play.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_popup_file_play.style.transition='background-color 100ms ease 0ms';
				if (me._ht_video_popup_file_play.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_popup_file_play.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._ht_video_popup_file_play.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._ht_video_popup_file_play.logicBlock_backgroundcolor();
		me._ht_video_popup_file_play.onclick=function (e) {
			if (me._ht_video_popup_file.ggApiPlayer) {
				if (me._ht_video_popup_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_popup_file.ggApiPlayer.playVideo();
					};
					if (me._ht_video_popup_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_popup_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_popup_file.ggApiPlayerType == 'vimeo') {
					me._ht_video_popup_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("ht_video_popup_file","1");
			}
		}
		me._ht_video_popup_file_play.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_popup_file_play']=true;
			me._ht_video_popup_file_play.logicBlock_backgroundcolor();
		}
		me._ht_video_popup_file_play.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_popup_file_play']=false;
			me._ht_video_popup_file_play.logicBlock_backgroundcolor();
		}
		me._ht_video_popup_file_play.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_popup_file_play_icon=document.createElement('div');
		els=me._ht_video_popup_file_play_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5Z29uIHN0cm9rZT'+
			'0iI2MyZTgxMiIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjcuNSw0LjUgJiN4YTsmI3g5OzI4LjUsMTggNy41LDMxLjUgIi8+Cjwvc3ZnPgo=';
		me._ht_video_popup_file_play_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_popup_file_play_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_popup_file_play_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_popup_file_play_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_popup_file_play.appendChild(me._ht_video_popup_file_play_icon);
		me._ht_video_popup.appendChild(me._ht_video_popup_file_play);
		el=me._ht_video_popup_url=document.createElement('div');
		me._ht_video_popup_url.seekbars = [];
		me._ht_video_popup_url.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_popup_url.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_popup_url.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_popup_url.hasChildNodes()) {
				me._ht_video_popup_url.removeChild(me._ht_video_popup_url.lastChild);
			}
			if (me._ht_video_popup_url__vid) {
				me._ht_video_popup_url__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_popup_url.ggVideoNotLoaded == false && me._ht_video_popup_url.ggDeactivate && player.isPlaying('ht_video_popup_url')) { me._ht_video_popup_url.ggDeactivate(); }
				me._ht_video_popup_url.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('ht_video_popup_url');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._ht_video_popup_url.ggVideoNotLoaded = false;
			me._ht_video_popup_url__vid=document.createElement('video');
			me._ht_video_popup_url__vid.className='ggskin ggskin_video';
			me._ht_video_popup_url__vid.setAttribute('width', '100%');
			me._ht_video_popup_url__vid.setAttribute('height', '100%');
			me._ht_video_popup_url__vid.setAttribute('crossOrigin', 'anonymous');
			me._ht_video_popup_url__vid.setAttribute('controlsList', 'nodownload');
			me._ht_video_popup_url__vid.setAttribute('disablepictureinpicture', 'true');
			me._ht_video_popup_url__vid.setAttribute('oncontextmenu', 'return false;');
			me._ht_video_popup_url__vid.setAttribute('autoplay', '');
			me._ht_video_popup_url__source=document.createElement('source');
			me._ht_video_popup_url__source.setAttribute('src', media);
			me._ht_video_popup_url__vid.setAttribute('playsinline', 'playsinline');
			me._ht_video_popup_url__vid.setAttribute('style', ';');
			me._ht_video_popup_url__vid.style.outline = 'none';
			me._ht_video_popup_url__vid.appendChild(me._ht_video_popup_url__source);
			me._ht_video_popup_url.appendChild(me._ht_video_popup_url__vid);
			var videoEl = player.registerVideoElement('ht_video_popup_url', me._ht_video_popup_url__vid);
			videoEl.autoplay = true;
			player.changeVolume('ht_video_popup_url', 0.0);
			notifySeekbars();
			if (me._ht_video_popup_url.ggActivate) {
				me._ht_video_popup_url__vid.addEventListener('play', me._ht_video_popup_url.ggActivate);
			}
			if (me._ht_video_popup_url.ggDeactivate) {
				me._ht_video_popup_url__vid.addEventListener('ended', me._ht_video_popup_url.ggDeactivate);
				me._ht_video_popup_url__vid.addEventListener('pause', me._ht_video_popup_url.ggDeactivate);
			}
			me._ht_video_popup_url.ggVideoSource = media;
		}
		el.ggId="ht_video_popup_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='bottom : calc(10% + 50px);';
		hs+='height : calc(80% - 100px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_popup_url.ggIsActive=function() {
			if (me._ht_video_popup_url__vid != null) {
				return (me._ht_video_popup_url__vid.paused == false && me._ht_video_popup_url__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_popup_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_url_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_popup_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_popup_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_popup_url.style.transition='';
				if (me._ht_video_popup_url.ggCurrentLogicStateVisible == 0) {
					me._ht_video_popup_url.style.visibility=(Number(me._ht_video_popup_url.style.opacity)>0||!me._ht_video_popup_url.style.opacity)?'inherit':'hidden';
					if (me._ht_video_popup_url.ggVideoNotLoaded) {
						me._ht_video_popup_url.ggInitMedia(me._ht_video_popup_url.ggVideoSource);
					}
					me._ht_video_popup_url.ggVisible=true;
				}
				else {
					me._ht_video_popup_url.style.visibility="hidden";
					me._ht_video_popup_url.ggInitMedia('');
					me._ht_video_popup_url.ggVisible=false;
				}
			}
		}
		me._ht_video_popup_url.logicBlock_visible();
		me._ht_video_popup_url.onclick=function (e) {
			if (me._ht_video_popup_url.ggApiPlayer) {
				if (me._ht_video_popup_url.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._ht_video_popup_url.ggApiPlayer.getPlayerState() == 1) {
							me._ht_video_popup_url.ggApiPlayer.pauseVideo();
						} else {
							me._ht_video_popup_url.ggApiPlayer.playVideo();
						}
					};
					if (me._ht_video_popup_url.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_popup_url.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_popup_url.ggApiPlayerType == 'vimeo') {
					var promise = me._ht_video_popup_url.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._ht_video_popup_url.ggApiPlayer.play();
						} else {
							me._ht_video_popup_url.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("ht_video_popup_url","1");
			}
		}
		me._ht_video_popup_url.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._ht_video_popup_url_play.style.transition='none';
			} else {
				me._ht_video_popup_url_play.style.transition='all 300ms ease-out 0ms';
			}
			me._ht_video_popup_url_play.style.opacity='0';
			me._ht_video_popup_url_play.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._ht_video_popup_url_play.style.transition='none';
			} else {
				me._ht_video_popup_url_play.style.transition='all 300ms ease-out 0ms';
			}
			me._ht_video_popup_url_play.ggParameter.sx=1.5;me._ht_video_popup_url_play.ggParameter.sy=1.5;
			me._ht_video_popup_url_play.style.transform=parameterToTransform(me._ht_video_popup_url_play.ggParameter);
			setTimeout(function() {skin.updateSize(me._ht_video_popup_url_play);}, 350);
		}
		me._ht_video_popup_url.ggDeactivate=function () {
			me._ht_video_popup_url_play.style.transition='none';
			me._ht_video_popup_url_play.ggParameter.sx=1;me._ht_video_popup_url_play.ggParameter.sy=1;
			me._ht_video_popup_url_play.style.transform=parameterToTransform(me._ht_video_popup_url_play.ggParameter);
			skin.updateSize(me._ht_video_popup_url_play);
			me._ht_video_popup_url_play.style.transition='none';
			me._ht_video_popup_url_play.style.opacity='1';
			me._ht_video_popup_url_play.style.visibility=me._ht_video_popup_url_play.ggVisible?'inherit':'hidden';
		}
		me._ht_video_popup_url.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_popup.appendChild(me._ht_video_popup_url);
		el=me._ht_video_popup_url_play=document.createElement('div');
		el.ggId="ht_video_popup_url_play";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 2px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_popup_url_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_popup_url_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_url_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_popup_url_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_popup_url_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_popup_url_play.style.transition='background-color 100ms ease 0ms';
				if (me._ht_video_popup_url_play.ggCurrentLogicStateVisible == 0) {
					me._ht_video_popup_url_play.style.visibility=(Number(me._ht_video_popup_url_play.style.opacity)>0||!me._ht_video_popup_url_play.style.opacity)?'inherit':'hidden';
					me._ht_video_popup_url_play.ggVisible=true;
				}
				else {
					me._ht_video_popup_url_play.style.visibility="hidden";
					me._ht_video_popup_url_play.ggVisible=false;
				}
			}
		}
		me._ht_video_popup_url_play.logicBlock_visible();
		me._ht_video_popup_url_play.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_popup_url_play'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_popup_url_play.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_popup_url_play.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_popup_url_play.style.transition='background-color 100ms ease 0ms';
				if (me._ht_video_popup_url_play.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_popup_url_play.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._ht_video_popup_url_play.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._ht_video_popup_url_play.logicBlock_backgroundcolor();
		me._ht_video_popup_url_play.onclick=function (e) {
			if (me._ht_video_popup_url.ggApiPlayer) {
				if (me._ht_video_popup_url.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_popup_url.ggApiPlayer.playVideo();
					};
					if (me._ht_video_popup_url.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_popup_url.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_popup_url.ggApiPlayerType == 'vimeo') {
					me._ht_video_popup_url.ggApiPlayer.play();
				}
			} else {
				player.playSound("ht_video_popup_url","1");
			}
		}
		me._ht_video_popup_url_play.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_popup_url_play']=true;
			me._ht_video_popup_url_play.logicBlock_backgroundcolor();
		}
		me._ht_video_popup_url_play.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_popup_url_play']=false;
			me._ht_video_popup_url_play.logicBlock_backgroundcolor();
		}
		me._ht_video_popup_url_play.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_popup_url_play_icon=document.createElement('div');
		els=me._ht_video_popup_url_play_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5Z29uIHN0cm9rZT'+
			'0iI2MyZTgxMiIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjcuNSw0LjUgJiN4YTsmI3g5OzI4LjUsMTggNy41LDMxLjUgIi8+Cjwvc3ZnPgo=';
		me._ht_video_popup_url_play_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_popup_url_play_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_popup_url_play_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_popup_url_play_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_popup_url_play.appendChild(me._ht_video_popup_url_play_icon);
		me._ht_video_popup.appendChild(me._ht_video_popup_url_play);
		me.divSkin.appendChild(me._ht_video_popup);
		el=me._ht_image_popup_fs=document.createElement('div');
		el.ggId="ht_image_popup_fs";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_popup_fs.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_image_popup_fs.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_popup_fs.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_popup_fs.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_popup_fs.style.transition='';
				if (me._ht_image_popup_fs.ggCurrentLogicStateVisible == 0) {
					me._ht_image_popup_fs.style.visibility=(Number(me._ht_image_popup_fs.style.opacity)>0||!me._ht_image_popup_fs.style.opacity)?'inherit':'hidden';
					me._ht_image_popup_fs.ggVisible=true;
				}
				else {
					me._ht_image_popup_fs.style.visibility="hidden";
					me._ht_image_popup_fs.ggVisible=false;
				}
			}
		}
		me._ht_image_popup_fs.logicBlock_visible();
		me._ht_image_popup_fs.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._ht_image_popup_fs.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_popup_fs_image=document.createElement('div');
		els=me._ht_image_popup_fs_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_image_popup_fs_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_image_popup_fs_image.ggSubElement.setAttribute('alt', player._(me._ht_image_popup_fs_image.ggAltText));
			me._ht_image_popup_fs_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_image_popup_fs_image.ggText_untranslated = img;
			me._ht_image_popup_fs_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_image_popup_fs_image.ggSubElement.style.width = '0px';
			me._ht_image_popup_fs_image.ggSubElement.style.height = '0px';
			me._ht_image_popup_fs_image.ggSubElement.src='';
			me._ht_image_popup_fs_image.ggSubElement.src=me._ht_image_popup_fs_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_image_popup_fs_image.ggText != player._(me._ht_image_popup_fs_image.ggText_untranslated)) {
				me._ht_image_popup_fs_image.ggText = player._(me._ht_image_popup_fs_image.ggText_untranslated);
				me._ht_image_popup_fs_image.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="ht_image_popup_fs_image";
		el.ggDx=0;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(80% - 30px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 30px) + 0px) / 2) + 30px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_popup_fs_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_popup_fs_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_image_popup_fs_image.clientWidth;
			var parentHeight = me._ht_image_popup_fs_image.clientHeight;
			var img = me._ht_image_popup_fs_image__img;
			var aspectRatioDiv = me._ht_image_popup_fs_image.clientWidth / me._ht_image_popup_fs_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._ht_image_popup_fs_image.ggScrollbars || currentWidth < me._ht_image_popup_fs_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_image_popup_fs_image.scrollLeft=currentWidth / 2 - me._ht_image_popup_fs_image.clientWidth / 2;
			}
			if (!me._ht_image_popup_fs_image.ggScrollbars || currentHeight < me._ht_image_popup_fs_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_image_popup_fs_image.scrollTop=currentHeight / 2 - me._ht_image_popup_fs_image.clientHeight / 2;
			}
		}
		me._ht_image_popup_fs.appendChild(me._ht_image_popup_fs_image);
		el=me._ht_image_popup_fs_title=document.createElement('div');
		els=me._ht_image_popup_fs_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_popup_fs_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_image_popup_fs_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_popup_fs_title.ggUpdateText();
		el.appendChild(els);
		me._ht_image_popup_fs_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_popup_fs_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_popup_fs.appendChild(me._ht_image_popup_fs_title);
		me.divSkin.appendChild(me._ht_image_popup_fs);
		el=me._ht_pdf_popup=document.createElement('div');
		el.ggId="ht_pdf_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_pdf_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pdf_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_popup.style.transition='';
				if (me._ht_pdf_popup.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_popup.style.visibility=(Number(me._ht_pdf_popup.style.opacity)>0||!me._ht_pdf_popup.style.opacity)?'inherit':'hidden';
					me._ht_pdf_popup.ggVisible=true;
				}
				else {
					me._ht_pdf_popup.style.visibility="hidden";
					me._ht_pdf_popup.ggVisible=false;
				}
			}
		}
		me._ht_pdf_popup.logicBlock_visible();
		me._ht_pdf_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_popup_pdf=document.createElement('div');
		els=me._ht_pdf_popup_pdf__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._ht_pdf_popup_pdf__pdf.setAttribute('frameborder', '0');
		me._ht_pdf_popup_pdf__pdf.setAttribute('width', '100%');
		me._ht_pdf_popup_pdf__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._ht_pdf_popup_pdf.ggInitPdf = function(file) {
			if (file) {
				if (me._ht_pdf_popup_pdf.ggPdfSource == file) return;
				me._ht_pdf_popup_pdf.pdfNotLoaded = false;
				me._ht_pdf_popup_pdf.ggPdfSource = file;
				let pdfUrl = (me._ht_pdf_popup_pdf.ggPdfSource.indexOf(':') != -1 || me._ht_pdf_popup_pdf.ggPdfSource.startsWith('/') || me._ht_pdf_popup_pdf.ggPdfSource.startsWith('./')) ? me._ht_pdf_popup_pdf.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._ht_pdf_popup_pdf.ggPdfSource;
				me._ht_pdf_popup_pdf__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._ht_pdf_popup_pdf__pdf.style.display = 'block';
			} else {
				me._ht_pdf_popup_pdf__pdf.setAttribute('src', '');
				me._ht_pdf_popup_pdf__pdf.style.display = 'none';
				me._ht_pdf_popup_pdf.pdfNotLoaded = true;
				me._ht_pdf_popup_pdf.ggPdfSource = '';
			}
		}
		me._ht_pdf_popup_pdf.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._ht_pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._ht_pdf_popup_pdf.ggInitPdf('');
		el.ggId="ht_pdf_popup_pdf";
		el.ggDx=0;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : calc(80% - 30px);';
		hs+='left : calc(50% - ((80% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 30px) + 2px) / 2) + 30px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_popup_pdf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_pdf_popup_pdf.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_popup.appendChild(me._ht_pdf_popup_pdf);
		el=me._ht_pdf_popup_title=document.createElement('div');
		els=me._ht_pdf_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_pdf_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_pdf_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_pdf_popup_title.ggUpdateText();
		el.appendChild(els);
		me._ht_pdf_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_pdf_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_popup.appendChild(me._ht_pdf_popup_title);
		me.divSkin.appendChild(me._ht_pdf_popup);
		el=me._ht_url_popup=document.createElement('div');
		els=me._ht_url_popup__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_url_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_url_popup.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_url_popup.ggUpdateText();
		el.appendChild(els);
		me._ht_url_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_url_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_url_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_popup.style.transition='';
				if (me._ht_url_popup.ggCurrentLogicStateVisible == 0) {
					me._ht_url_popup.style.visibility=(Number(me._ht_url_popup.style.opacity)>0||!me._ht_url_popup.style.opacity)?'inherit':'hidden';
					me._ht_url_popup.ggVisible=true;
				}
				else {
					me._ht_url_popup.style.visibility="hidden";
					me._ht_url_popup.ggVisible=false;
				}
			}
		}
		me._ht_url_popup.logicBlock_visible();
		me._ht_url_popup.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._ht_url_popup);
		el=me._sounds_splashscreen=document.createElement('div');
		el.ggId="sounds_splashscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((280px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 280px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sounds_splashscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sounds_splashscreen.style.transition='';
				if (me._sounds_splashscreen.ggCurrentLogicStateVisible == 0) {
					me._sounds_splashscreen.style.visibility=(Number(me._sounds_splashscreen.style.opacity)>0||!me._sounds_splashscreen.style.opacity)?'inherit':'hidden';
					me._sounds_splashscreen.ggVisible=true;
				}
				else {
					me._sounds_splashscreen.style.visibility="hidden";
					me._sounds_splashscreen.ggVisible=false;
				}
			}
		}
		me._sounds_splashscreen.logicBlock_visible();
		me._sounds_splashscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off_bg=document.createElement('div');
		el.ggId="sounds_off_bg";
		el.ggDx=70;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 0px 27px 27px 0px;';
		hs+='cursor : default;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 70px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_off_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_off_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['sounds_off_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._sounds_off_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._sounds_off_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._sounds_off_bg.style.transition='background-color 100ms ease 0ms';
				if (me._sounds_off_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._sounds_off_bg.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._sounds_off_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._sounds_off_bg.logicBlock_backgroundcolor();
		me._sounds_off_bg.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('sounds_splashscreen_accepted', true);
			player.setVariableValue('toggle_audio', false);
		}
		me._sounds_off_bg.onmouseenter=function (e) {
			me.elementMouseOver['sounds_off_bg']=true;
			me._sounds_off_bg.logicBlock_backgroundcolor();
		}
		me._sounds_off_bg.onmouseleave=function (e) {
			me.elementMouseOver['sounds_off_bg']=false;
			me._sounds_off_bg.logicBlock_backgroundcolor();
		}
		me._sounds_off_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off=document.createElement('div');
		els=me._sounds_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNjMmU4MTI7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTYuNSw3LjUgOSwxMy41IDMsMTMuNSAzLDIyLjUgOSwyMi41IDE2LjUsMjguNSAiLz4KIDxsaW5lIGNsYXNzPSJzdDAiIHgyPSIyNS41IiB5Mj0iMjIuNSIgeTE9IjEzLjUiIHgxPSIzNC41Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4Mj0iMzQuNSIgeTI9IjIyLjUiIHkxPSIxMy41IiB4MT0iMjUuNSIvPgo8'+
			'L3N2Zz4K';
		me._sounds_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sounds_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='left : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_off.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_off_bg.appendChild(me._sounds_off);
		me._sounds_splashscreen.appendChild(me._sounds_off_bg);
		el=me._sounds_on_bg=document.createElement('div');
		el.ggId="sounds_on_bg";
		el.ggDx=-70;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 27px 0px 0px 27px;';
		hs+='cursor : default;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) - 70px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_on_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_on_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['sounds_on_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._sounds_on_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._sounds_on_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._sounds_on_bg.style.transition='background-color 100ms ease 0ms';
				if (me._sounds_on_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._sounds_on_bg.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._sounds_on_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._sounds_on_bg.logicBlock_backgroundcolor();
		me._sounds_on_bg.onclick=function (e) {
			player.startAutoplayMedia();
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_on_bg.onmouseenter=function (e) {
			me.elementMouseOver['sounds_on_bg']=true;
			me._sounds_on_bg.logicBlock_backgroundcolor();
		}
		me._sounds_on_bg.onmouseleave=function (e) {
			me.elementMouseOver['sounds_on_bg']=false;
			me._sounds_on_bg.logicBlock_backgroundcolor();
		}
		me._sounds_on_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNjMmU4MTI7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTYuNSw3LjUgOSwxMy41IDMsMTMuNSAzLDIyLjUgOSwyMi41IDE2LjUsMjguNSAiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOC42LDcuNGM1LjksNS45LDUuOSwxNS40LDAsMjEuMiBNMjMuMywxMi43YzIuOSwyLjksMi45LDcuNywwLDEwLjYiLz4KPC9zdmc+Cg==';
		me._sounds_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sounds_on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='left : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_on_bg.appendChild(me._sounds_on);
		me._sounds_splashscreen.appendChild(me._sounds_on_bg);
		el=me._sounds_splashscreen_border=document.createElement('div');
		el.ggId="sounds_splashscreen_border";
		el.ggDx=1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 27px;';
		hs+='cursor : default;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((280px + 2px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 2px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen_border.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_splashscreen_border.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen.appendChild(me._sounds_splashscreen_border);
		me.divSkin.appendChild(me._sounds_splashscreen);
		el=me._screentint_phone=document.createElement('div');
		el.ggId="screentint_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true)) || 
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_floorplan') == true)) || 
				((player.getVariableValue('vis_phone_map') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint_phone.style.transition='opacity 500ms ease 0ms';
				if (me._screentint_phone.ggCurrentLogicStateAlpha == 0) {
					me._screentint_phone.style.visibility=me._screentint_phone.ggVisible?'inherit':'hidden';
					me._screentint_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint_phone.style.opacity == 0.0) { me._screentint_phone.style.visibility="hidden"; } }, 505);
					me._screentint_phone.style.opacity=0;
				}
			}
		}
		me._screentint_phone.logicBlock_alpha();
		me._screentint_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._safe_area_phone=document.createElement('div');
		el.ggId="safe_area_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._safe_area_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_thumbs', false);
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_floorplan', false);
			player.setVariableValue('vis_phone_map', false);
			player.setVariableValue('vis_phone_image', false);
			player.setVariableValue('vis_phone_pdf', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_video_file', false);
			player.setVariableValue('vis_phone_video_url', false);
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4Mj0iOCIgeTI9IjI0IiB5MT0iOCIgeDE9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4Mj0iMjQiIHkyPSIyNCIgeTE9IjgiIHgxPSI4Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4Mj0iOSIgeTI9IjI3IiB5MT0iOSIgeDE9IjI3Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4Mj0iMjciIHkyPSIyNyIgeTE9IjkiIHgxPSI5Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.onmouseenter=function (e) {
			me._btn_close_popup_phone__img.style.visibility='hidden';
			me._btn_close_popup_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_close_popup_phone']=true;
		}
		me._btn_close_popup_phone.onmouseleave=function (e) {
			me._btn_close_popup_phone__img.style.visibility='inherit';
			me._btn_close_popup_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_close_popup_phone']=false;
		}
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		me._safe_area_phone.appendChild(me._close_popup_phone);
		el=me._info_popup_phone=document.createElement('div');
		el.ggId="info_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 50px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_phone.style.transition='';
				if (me._info_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_phone.style.visibility=(Number(me._info_popup_phone.style.opacity)>0||!me._info_popup_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_phone.ggVisible=true;
				}
				else {
					me._info_popup_phone.style.visibility="hidden";
					me._info_popup_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_phone.logicBlock_visible();
		me._info_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_text_phone);
		el=me._info_popup_title_phone=document.createElement('div');
		els=me._info_popup_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_title_phone);
		me._safe_area_phone.appendChild(me._info_popup_phone);
		el=me._thumbnail_scroller_phone=document.createElement('div');
		els=me._thumbnail_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 103px;';
		hs+='left : 50%;';
		hs+='margin-left : -87px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 174px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosX = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone.ggScrollPosX >= me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosY = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone.ggScrollPosY >= me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller_phone.ggScrollByX(me._thumbnail_scroller_phone.ggDragInertiaX);
				me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller_phone__content.onmouseup = null;
			me._thumbnail_scroller_phone__content.onmousemove = null;
			me._thumbnail_scroller_phone__content.ontouchend = null;
			me._thumbnail_scroller_phone__content.ontouchmove = null;
			me._thumbnail_scroller_phone__content.onpointerup = null;
			me._thumbnail_scroller_phone__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone.ggDragStartY) > 10) me._thumbnail_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone.ggDragLastX) * me._thumbnail_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone.ggDragLastY) * me._thumbnail_scroller_phone.ggVPercentVisible;
			me._thumbnail_scroller_phone.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone.ggDragLastX = eventX;
			me._thumbnail_scroller_phone.ggDragLastY = eventY;
			me._thumbnail_scroller_phone.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastX = me._thumbnail_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone.ggDragLastY = me._thumbnail_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone__content.onmouseup = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.ontouchend = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.onmousemove = me._thumbnail_scroller_phone__content.mousetouchmove;
			me._thumbnail_scroller_phone__content.ontouchmove = me._thumbnail_scroller_phone__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_scroller_phone__content.onpointerup = me._thumbnail_scroller_phone__content.ontouchend;
				me._thumbnail_scroller_phone__content.onpointermove = me._thumbnail_scroller_phone__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnail_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone.ggScrollPosY = 0;
		me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_scroller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_scroller_phone.style.transition='';
				if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_scroller_phone.style.visibility=(Number(me._thumbnail_scroller_phone.style.opacity)>0||!me._thumbnail_scroller_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_scroller_phone.ggVisible=true;
				}
				else {
					me._thumbnail_scroller_phone.style.visibility="hidden";
					me._thumbnail_scroller_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_scroller_phone.logicBlock_visible();
		me._thumbnail_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone.ggScrollPosY / me._thumbnail_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone.ggVertScrollVisible) {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth - 8;
					if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight - 8;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height - me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone__vertScrollBg.style.height = me._thumbnail_scroller_phone.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone__vertScrollFg.style.height = me._thumbnail_scroller_phone.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone.ggScrollPosY = me._thumbnail_scroller_phone.ggScrollPosYPercent * me._thumbnail_scroller_phone.ggAvailableHeight;
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth;
					me._thumbnail_scroller_phone.ggScrollPosY = 0;
					me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone);
					me._thumbnail_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 166;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone.ggUpdating == true) return;
			me._node_cloner_phone.ggUpdating = true;
			var el=me._node_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone.parentNode.parentNode.clientWidth) : me._node_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone.offsetLeft) * me._node_cloner_phone.ggNumRepeat / 100.0) / me._node_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone.ggWidth + 'px';
				parameter.height=me._node_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone.ggNodeCount = me._node_cloner_phone.ggNumFilterPassed;
			me._node_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone.parentNode && me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nope";
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone.childNodes.length; i++) {
				var child=me._node_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone.ggUpdate();
		}
		me._thumbnail_scroller_phone__content.appendChild(me._node_cloner_phone);
		me._safe_area_phone.appendChild(me._thumbnail_scroller_phone);
		el=me._map_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 75px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_el_phone.style.transition='';
				if (me._map_el_phone.ggCurrentLogicStateVisible == 0) {
					me._map_el_phone.style.visibility=(Number(me._map_el_phone.style.opacity)>0||!me._map_el_phone.style.opacity)?'inherit':'hidden';
					if (me._map_el_phone.ggMapNotLoaded && me._map_el_phone.ggInitMap) {
						me._map_el_phone.ggInitMap(false);
						me._map_el_phone.ggInitMapMarkers(true);
					}
					me._map_el_phone.ggVisible=true;
				}
				else {
					me._map_el_phone.style.visibility="hidden";
					if (me._map_el_phone.ggClearMap) me._map_el_phone.ggClearMap();
					me._map_el_phone.ggVisible=false;
				}
			}
		}
		me._map_el_phone.logicBlock_visible();
		me._map_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._map_el_phone);
		el=me._floorplan_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 75px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el_phone.style.transition='';
				if (me._floorplan_el_phone.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el_phone.style.visibility=(Number(me._floorplan_el_phone.style.opacity)>0||!me._floorplan_el_phone.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el_phone.ggMapNotLoaded && me._floorplan_el_phone.ggInitMap) {
						me._floorplan_el_phone.ggInitMap(false);
						me._floorplan_el_phone.ggInitMapMarkers(true);
					}
					me._floorplan_el_phone.ggVisible=true;
				}
				else {
					me._floorplan_el_phone.style.visibility="hidden";
					if (me._floorplan_el_phone.ggClearMap) me._floorplan_el_phone.ggClearMap();
					me._floorplan_el_phone.ggVisible=false;
				}
			}
		}
		me._floorplan_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._floorplan_el_phone);
		el=me._image_popup_phone=document.createElement('div');
		els=me._image_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_popup_phone.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_popup_phone.ggSubElement.setAttribute('alt', player._(me._image_popup_phone.ggAltText));
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_popup_phone.ggText_untranslated = img;
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_popup_phone.ggSubElement.style.width = '0px';
			me._image_popup_phone.ggSubElement.style.height = '0px';
			me._image_popup_phone.ggSubElement.src='';
			me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_popup_phone.ggText != player._(me._image_popup_phone.ggText_untranslated)) {
				me._image_popup_phone.ggText = player._(me._image_popup_phone.ggText_untranslated);
				me._image_popup_phone.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 75px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_image') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_phone.style.transition='';
				if (me._image_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._image_popup_phone.style.visibility=(Number(me._image_popup_phone.style.opacity)>0||!me._image_popup_phone.style.opacity)?'inherit':'hidden';
					me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
					me._image_popup_phone.ggVisible=true;
				}
				else {
					me._image_popup_phone.style.visibility="hidden";
					me._image_popup_phone.ggSubElement.src='';
					me._image_popup_phone.ggVisible=false;
				}
			}
		}
		me._image_popup_phone.logicBlock_visible();
		me._image_popup_phone.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_popup_phone.clientWidth;
			var parentHeight = me._image_popup_phone.clientHeight;
			var img = me._image_popup_phone__img;
			var aspectRatioDiv = me._image_popup_phone.clientWidth / me._image_popup_phone.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_popup_phone.ggScrollbars || currentWidth < me._image_popup_phone.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_popup_phone.scrollLeft=currentWidth / 2 - me._image_popup_phone.clientWidth / 2;
			}
			if (!me._image_popup_phone.ggScrollbars || currentHeight < me._image_popup_phone.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_popup_phone.scrollTop=currentHeight / 2 - me._image_popup_phone.clientHeight / 2;
			}
		}
		me._safe_area_phone.appendChild(me._image_popup_phone);
		el=me._pdf_popup_phone=document.createElement('div');
		els=me._pdf_popup_phone__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup_phone__pdf.setAttribute('frameborder', '0');
		me._pdf_popup_phone__pdf.setAttribute('width', '100%');
		me._pdf_popup_phone__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup_phone.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup_phone.ggPdfSource == file) return;
				me._pdf_popup_phone.pdfNotLoaded = false;
				me._pdf_popup_phone.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup_phone.ggPdfSource.indexOf(':') != -1 || me._pdf_popup_phone.ggPdfSource.startsWith('/') || me._pdf_popup_phone.ggPdfSource.startsWith('./')) ? me._pdf_popup_phone.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_popup_phone.ggPdfSource;
				me._pdf_popup_phone__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_popup_phone__pdf.style.display = 'block';
			} else {
				me._pdf_popup_phone__pdf.setAttribute('src', '');
				me._pdf_popup_phone__pdf.style.display = 'none';
				me._pdf_popup_phone.pdfNotLoaded = true;
				me._pdf_popup_phone.ggPdfSource = '';
			}
		}
		me._pdf_popup_phone.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_popup_phone.ggInitPdf('');
		el.ggId="pdf_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 75px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_pdf') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_phone.style.transition='';
				if (me._pdf_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_phone.style.visibility=(Number(me._pdf_popup_phone.style.opacity)>0||!me._pdf_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._pdf_popup_phone.ggPdfNotLoaded) {
						me._pdf_popup_phone.ggInitPdf(me._pdf_popup_phone.ggPdfSource);
					}
					me._pdf_popup_phone.ggVisible=true;
				}
				else {
					me._pdf_popup_phone.style.visibility="hidden";
					if (me._pdf_popup_phone.ggInitPdf) me._pdf_popup_phone.ggInitPdf();
					me._pdf_popup_phone.ggVisible=false;
				}
			}
		}
		me._pdf_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._pdf_popup_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 40px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 40px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.logicBlock_visible();
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 3px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((3px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar_phone || e.target == me._video_controller_seekbar_phone__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = '#3c3c3c';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-13px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 2 + 1) * percent);
					playheadpos += -13;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (2 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(100,100,100,1) ' + currPos +'%, rgba(100,100,100,1) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(100,100,100,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(60,60,60,1) ' + currPos + '%, rgba(60,60,60,1) ' + rangeStart + '%';
									gradientString += ', rgba(100,100,100,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(100,100,100,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(60,60,60,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='background : #3c3c3c;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 2px;';
		var hs_playhead = 'height: 30px;';
		hs_playhead += 'width: 30px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -13px;';
		hs_playhead += 'top: -13.5px;';
		hs_playhead += 'border-radius: 15px;';
		hs_playhead += cssPrefix + 'border-radius: 15px;';
		hs_playhead += 'background-color: rgba(194,232,18,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		me._safe_area_phone.appendChild(me._video_controller_phone);
		el=me._youtube_popup_phone=document.createElement('div');
		me._youtube_popup_phone.seekbars = [];
			me._youtube_popup_phone.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._youtube_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._youtube_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._youtube_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._youtube_popup_phone.hasChildNodes()) {
				me._youtube_popup_phone.removeChild(me._youtube_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._youtube_popup_phone.ggVideoNotLoaded == false && me._youtube_popup_phone.ggDeactivate && player.isPlaying('youtube_popup_phone')) { me._youtube_popup_phone.ggDeactivate(); }
				me._youtube_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._youtube_popup_phone.ggVideoNotLoaded = false;
			me._youtube_popup_phone__vid=document.createElement('iframe');
			me._youtube_popup_phone__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._youtube_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._youtube_popup_phone__vid.setAttribute('width', '100%');
			me._youtube_popup_phone__vid.setAttribute('height', '100%');
			me._youtube_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._youtube_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._youtube_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._youtube_popup_phone.appendChild(me._youtube_popup_phone__vid);
			me._youtube_popup_phone__vid.id = 'youtube-video';
			me._youtube_popup_phone.ggYoutubeApiReady = function() {
				me._youtube_popup_phone.ggApiPlayerType = 'youtube';
				me._youtube_popup_phone.ggApiPlayerReady = false;
				me._youtube_popup_phone.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._youtube_popup_phone.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._youtube_popup_phone.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._youtube_popup_phone.ggMediaEnded) {
								me._youtube_popup_phone.ggMediaEnded();
							}
							if (event.data == 1 && me._youtube_popup_phone.ggActivate) {
								me._youtube_popup_phone.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._youtube_popup_phone.ggDeactivate) {
								me._youtube_popup_phone.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'youtube_popup_phone' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._youtube_popup_phone.ggApiPlayer.unMute();
						if (args.state == 1) skin._youtube_popup_phone.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._youtube_popup_phone.ggApiPlayer.isMuted()) skin._youtube_popup_phone.ggApiPlayer.unMute(); else skin._youtube_popup_phone.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'youtube_popup_phone' || args.id == '_main') {
						if (args.type == 'set') skin._youtube_popup_phone.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._youtube_popup_phone.ggApiPlayer.setVolume(skin._youtube_popup_phone.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._youtube_popup_phone.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._youtube_popup_phone.ggYoutubeApiReady();}
		}
		el.ggId="youtube_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._youtube_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._youtube_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._youtube_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._youtube_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._youtube_popup_phone.style.transition='';
				if (me._youtube_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._youtube_popup_phone.style.visibility=(Number(me._youtube_popup_phone.style.opacity)>0||!me._youtube_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._youtube_popup_phone.ggVideoNotLoaded) {
						me._youtube_popup_phone.ggInitMedia(me._youtube_popup_phone.ggVideoSource);
					}
					me._youtube_popup_phone.ggVisible=true;
				}
				else {
					me._youtube_popup_phone.style.visibility="hidden";
					me._youtube_popup_phone.ggInitMedia('');
					me._youtube_popup_phone.ggVisible=false;
				}
			}
		}
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._youtube_popup_phone);
		el=me._vimeo_popup_phone=document.createElement('div');
		me._vimeo_popup_phone.seekbars = [];
		me._vimeo_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._vimeo_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._vimeo_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._vimeo_popup_phone.hasChildNodes()) {
				me._vimeo_popup_phone.removeChild(me._vimeo_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._vimeo_popup_phone.ggVideoNotLoaded == false && me._vimeo_popup_phone.ggDeactivate && player.isPlaying('vimeo_popup_phone')) { me._vimeo_popup_phone.ggDeactivate(); }
				me._vimeo_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._vimeo_popup_phone.ggVideoNotLoaded = false;
			me._vimeo_popup_phone__vid=document.createElement('iframe');
			me._vimeo_popup_phone__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._vimeo_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._vimeo_popup_phone__vid.setAttribute('width', '100%');
			me._vimeo_popup_phone__vid.setAttribute('height', '100%');
			me._vimeo_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._vimeo_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._vimeo_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._vimeo_popup_phone.appendChild(me._vimeo_popup_phone__vid);
			me._vimeo_popup_phone.ggApiPlayerType = 'vimeo';
			me._vimeo_popup_phone.ggApiPlayer = new Vimeo.Player(me._vimeo_popup_phone__vid);
			if (player.getPlayerMuted()) me._vimeo_popup_phone.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'vimeo_popup_phone' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._vimeo_popup_phone.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._vimeo_popup_phone.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._vimeo_popup_phone.ggApiPlayer.getVolume() > 0.0) skin._vimeo_popup_phone.ggApiPlayer.setVolume(0); else skin._vimeo_popup_phone.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'vimeo_popup_phone' || args.id == '_main') {
					if (args.type == 'set') skin._vimeo_popup_phone.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._vimeo_popup_phone.ggApiPlayer.getVolume().then(function(volume) { skin._vimeo_popup_phone.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._vimeo_popup_phone.ggVideoSource = media;
		}
		el.ggId="vimeo_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vimeo_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vimeo_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vimeo_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vimeo_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vimeo_popup_phone.style.transition='';
				if (me._vimeo_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._vimeo_popup_phone.style.visibility=(Number(me._vimeo_popup_phone.style.opacity)>0||!me._vimeo_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._vimeo_popup_phone.ggVideoNotLoaded) {
						me._vimeo_popup_phone.ggInitMedia(me._vimeo_popup_phone.ggVideoSource);
					}
					me._vimeo_popup_phone.ggVisible=true;
				}
				else {
					me._vimeo_popup_phone.style.visibility="hidden";
					me._vimeo_popup_phone.ggInitMedia('');
					me._vimeo_popup_phone.ggVisible=false;
				}
			}
		}
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._vimeo_popup_phone);
		el=me._video_file_popup_phone=document.createElement('div');
		me._video_file_popup_phone.seekbars = [];
		me._video_file_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_popup_phone.hasChildNodes()) {
				me._video_file_popup_phone.removeChild(me._video_file_popup_phone.lastChild);
			}
			if (me._video_file_popup_phone__vid) {
				me._video_file_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_popup_phone.ggVideoNotLoaded == false && me._video_file_popup_phone.ggDeactivate && player.isPlaying('video_file_popup_phone')) { me._video_file_popup_phone.ggDeactivate(); }
				me._video_file_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_popup_phone.ggVideoNotLoaded = false;
			me._video_file_popup_phone__vid=document.createElement('video');
			me._video_file_popup_phone__vid.className='ggskin ggskin_video';
			me._video_file_popup_phone__vid.setAttribute('width', '100%');
			me._video_file_popup_phone__vid.setAttribute('height', '100%');
			me._video_file_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_file_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_file_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_popup_phone__vid.setAttribute('autoplay', '');
			me._video_file_popup_phone__source=document.createElement('source');
			me._video_file_popup_phone__source.setAttribute('src', media);
			me._video_file_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_popup_phone__vid.setAttribute('style', ';');
			me._video_file_popup_phone__vid.style.outline = 'none';
			me._video_file_popup_phone__vid.appendChild(me._video_file_popup_phone__source);
			me._video_file_popup_phone.appendChild(me._video_file_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_file_popup_phone', me._video_file_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_file_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_file_popup_phone.ggActivate) {
				me._video_file_popup_phone__vid.addEventListener('play', me._video_file_popup_phone.ggActivate);
			}
			if (me._video_file_popup_phone.ggDeactivate) {
				me._video_file_popup_phone__vid.addEventListener('ended', me._video_file_popup_phone.ggDeactivate);
				me._video_file_popup_phone__vid.addEventListener('pause', me._video_file_popup_phone.ggDeactivate);
			}
			me._video_file_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_file_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone.ggIsActive=function() {
			if (me._video_file_popup_phone__vid != null) {
				return (me._video_file_popup_phone__vid.paused == false && me._video_file_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone.style.transition='';
				if (me._video_file_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone.style.visibility=(Number(me._video_file_popup_phone.style.opacity)>0||!me._video_file_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_file_popup_phone.ggVideoNotLoaded) {
						me._video_file_popup_phone.ggInitMedia(me._video_file_popup_phone.ggVideoSource);
					}
					me._video_file_popup_phone.ggVisible=true;
				}
				else {
					me._video_file_popup_phone.style.visibility="hidden";
					me._video_file_popup_phone.ggInitMedia('');
					me._video_file_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_popup_phone.ggApiPlayer.play();
						} else {
							me._video_file_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_file_popup_phone_play.style.transition='none';
			} else {
				me._video_file_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_file_popup_phone_play.style.opacity='0';
			me._video_file_popup_phone_play.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_file_popup_phone_play.style.transition='none';
			} else {
				me._video_file_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_file_popup_phone_play.ggParameter.sx=1.5;me._video_file_popup_phone_play.ggParameter.sy=1.5;
			me._video_file_popup_phone_play.style.transform=parameterToTransform(me._video_file_popup_phone_play.ggParameter);
			setTimeout(function() {skin.updateSize(me._video_file_popup_phone_play);}, 350);
		}
		me._video_file_popup_phone.ggDeactivate=function () {
			me._video_file_popup_phone_play.style.transition='none';
			me._video_file_popup_phone_play.ggParameter.sx=1;me._video_file_popup_phone_play.ggParameter.sy=1;
			me._video_file_popup_phone_play.style.transform=parameterToTransform(me._video_file_popup_phone_play.ggParameter);
			skin.updateSize(me._video_file_popup_phone_play);
			me._video_file_popup_phone_play.style.transition='none';
			me._video_file_popup_phone_play.style.opacity='1';
			me._video_file_popup_phone_play.style.visibility=me._video_file_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_file_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._video_file_popup_phone);
		el=me._video_file_popup_phone_play=document.createElement('div');
		el.ggId="video_file_popup_phone_play";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 2px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone_play.style.transition='background-color 100ms ease 0ms';
				if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone_play.style.visibility=(Number(me._video_file_popup_phone_play.style.opacity)>0||!me._video_file_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_file_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_file_popup_phone_play.style.visibility="hidden";
					me._video_file_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone_play.logicBlock_visible();
		me._video_file_popup_phone_play.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['video_file_popup_phone_play'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._video_file_popup_phone_play.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._video_file_popup_phone_play.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._video_file_popup_phone_play.style.transition='background-color 100ms ease 0ms';
				if (me._video_file_popup_phone_play.ggCurrentLogicStateBackgroundColor == 0) {
					me._video_file_popup_phone_play.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._video_file_popup_phone_play.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._video_file_popup_phone_play.logicBlock_backgroundcolor();
		me._video_file_popup_phone_play.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_file_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_file_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone_play.onmouseenter=function (e) {
			me.elementMouseOver['video_file_popup_phone_play']=true;
			me._video_file_popup_phone_play.logicBlock_backgroundcolor();
		}
		me._video_file_popup_phone_play.onmouseleave=function (e) {
			me.elementMouseOver['video_file_popup_phone_play']=false;
			me._video_file_popup_phone_play.logicBlock_backgroundcolor();
		}
		me._video_file_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_file_popup_phone_play_icon=document.createElement('div');
		els=me._video_file_popup_phone_play_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5Z29uIHN0cm9rZT'+
			'0iI2MyZTgxMiIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjcuNSw0LjUgJiN4YTsmI3g5OzI4LjUsMTggNy41LDMxLjUgIi8+Cjwvc3ZnPgo=';
		me._video_file_popup_phone_play_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_file_popup_phone_play_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play_icon.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_popup_phone_play.appendChild(me._video_file_popup_phone_play_icon);
		me._safe_area_phone.appendChild(me._video_file_popup_phone_play);
		el=me._video_url_popup_phone=document.createElement('div');
		me._video_url_popup_phone.seekbars = [];
		me._video_url_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_popup_phone.hasChildNodes()) {
				me._video_url_popup_phone.removeChild(me._video_url_popup_phone.lastChild);
			}
			if (me._video_url_popup_phone__vid) {
				me._video_url_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_popup_phone.ggVideoNotLoaded == false && me._video_url_popup_phone.ggDeactivate && player.isPlaying('video_url_popup_phone')) { me._video_url_popup_phone.ggDeactivate(); }
				me._video_url_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_popup_phone.ggVideoNotLoaded = false;
			me._video_url_popup_phone__vid=document.createElement('video');
			me._video_url_popup_phone__vid.className='ggskin ggskin_video';
			me._video_url_popup_phone__vid.setAttribute('width', '100%');
			me._video_url_popup_phone__vid.setAttribute('height', '100%');
			me._video_url_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_url_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_url_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_popup_phone__vid.setAttribute('autoplay', '');
			me._video_url_popup_phone__source=document.createElement('source');
			me._video_url_popup_phone__source.setAttribute('src', media);
			me._video_url_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_popup_phone__vid.setAttribute('style', ';');
			me._video_url_popup_phone__vid.style.outline = 'none';
			me._video_url_popup_phone__vid.appendChild(me._video_url_popup_phone__source);
			me._video_url_popup_phone.appendChild(me._video_url_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_url_popup_phone', me._video_url_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_url_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_url_popup_phone.ggActivate) {
				me._video_url_popup_phone__vid.addEventListener('play', me._video_url_popup_phone.ggActivate);
			}
			if (me._video_url_popup_phone.ggDeactivate) {
				me._video_url_popup_phone__vid.addEventListener('ended', me._video_url_popup_phone.ggDeactivate);
				me._video_url_popup_phone__vid.addEventListener('pause', me._video_url_popup_phone.ggDeactivate);
			}
			me._video_url_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_url_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone.ggIsActive=function() {
			if (me._video_url_popup_phone__vid != null) {
				return (me._video_url_popup_phone__vid.paused == false && me._video_url_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone.style.transition='';
				if (me._video_url_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone.style.visibility=(Number(me._video_url_popup_phone.style.opacity)>0||!me._video_url_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_url_popup_phone.ggVideoNotLoaded) {
						me._video_url_popup_phone.ggInitMedia(me._video_url_popup_phone.ggVideoSource);
					}
					me._video_url_popup_phone.ggVisible=true;
				}
				else {
					me._video_url_popup_phone.style.visibility="hidden";
					me._video_url_popup_phone.ggInitMedia('');
					me._video_url_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_popup_phone.ggApiPlayer.play();
						} else {
							me._video_url_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_url_popup_phone_play.style.transition='none';
			} else {
				me._video_url_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_url_popup_phone_play.style.opacity='0';
			me._video_url_popup_phone_play.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_url_popup_phone_play.style.transition='none';
			} else {
				me._video_url_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_url_popup_phone_play.ggParameter.sx=1.5;me._video_url_popup_phone_play.ggParameter.sy=1.5;
			me._video_url_popup_phone_play.style.transform=parameterToTransform(me._video_url_popup_phone_play.ggParameter);
			setTimeout(function() {skin.updateSize(me._video_url_popup_phone_play);}, 350);
		}
		me._video_url_popup_phone.ggDeactivate=function () {
			me._video_url_popup_phone_play.style.transition='none';
			me._video_url_popup_phone_play.ggParameter.sx=1;me._video_url_popup_phone_play.ggParameter.sy=1;
			me._video_url_popup_phone_play.style.transform=parameterToTransform(me._video_url_popup_phone_play.ggParameter);
			skin.updateSize(me._video_url_popup_phone_play);
			me._video_url_popup_phone_play.style.transition='none';
			me._video_url_popup_phone_play.style.opacity='1';
			me._video_url_popup_phone_play.style.visibility=me._video_url_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_url_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._video_url_popup_phone);
		el=me._video_url_popup_phone_play=document.createElement('div');
		el.ggId="video_url_popup_phone_play";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 2px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone_play.style.transition='background-color 100ms ease 0ms';
				if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone_play.style.visibility=(Number(me._video_url_popup_phone_play.style.opacity)>0||!me._video_url_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_url_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_url_popup_phone_play.style.visibility="hidden";
					me._video_url_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone_play.logicBlock_visible();
		me._video_url_popup_phone_play.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['video_url_popup_phone_play'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._video_url_popup_phone_play.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._video_url_popup_phone_play.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._video_url_popup_phone_play.style.transition='background-color 100ms ease 0ms';
				if (me._video_url_popup_phone_play.ggCurrentLogicStateBackgroundColor == 0) {
					me._video_url_popup_phone_play.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._video_url_popup_phone_play.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._video_url_popup_phone_play.logicBlock_backgroundcolor();
		me._video_url_popup_phone_play.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_url_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_url_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone_play.onmouseenter=function (e) {
			me.elementMouseOver['video_url_popup_phone_play']=true;
			me._video_url_popup_phone_play.logicBlock_backgroundcolor();
		}
		me._video_url_popup_phone_play.onmouseleave=function (e) {
			me.elementMouseOver['video_url_popup_phone_play']=false;
			me._video_url_popup_phone_play.logicBlock_backgroundcolor();
		}
		me._video_url_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_url_popup_phone_play_icon=document.createElement('div');
		els=me._video_url_popup_phone_play_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5Z29uIHN0cm9rZT'+
			'0iI2MyZTgxMiIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjcuNSw0LjUgJiN4YTsmI3g5OzI4LjUsMTggNy41LDMxLjUgIi8+Cjwvc3ZnPgo=';
		me._video_url_popup_phone_play_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_url_popup_phone_play_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play_icon.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_popup_phone_play.appendChild(me._video_url_popup_phone_play_icon);
		me._safe_area_phone.appendChild(me._video_url_popup_phone_play);
		me._screentint_phone.appendChild(me._safe_area_phone);
		me.divSkin.appendChild(me._screentint_phone);
		el=me._local_fonts=document.createElement('div');
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		me._button_container.logicBlock_visible();
		me._btn_thumbnails.logicBlock_visible();
		me._btn_thumbnails.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_thumbnails']=false;
		me._btn_fullscreen.logicBlock_position();
		me._btn_fullscreen.logicBlock_visible();
		me._btn_fullscreen.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_fullscreen']=false;
		me._btn_fullscreen_exit.logicBlock_visible();
		me._btn_fullscreen_enter.logicBlock_visible();
		me._btn_languages.logicBlock_position();
		me._btn_languages.logicBlock_visible();
		me._btn_languages.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_languages']=false;
		me._btn_gyro.logicBlock_position();
		me._btn_gyro.logicBlock_visible();
		me._btn_gyro.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_gyro']=false;
		me._btn_gyro_on_icon.logicBlock_visible();
		me._btn_gyro_off_icon.logicBlock_visible();
		me._btn_vr.logicBlock_position();
		me._btn_vr.logicBlock_visible();
		me._btn_vr.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_vr']=false;
		me._btn_audio.logicBlock_position();
		me._btn_audio.logicBlock_visible();
		me._btn_audio.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_audio']=false;
		me._btn_audio_on.logicBlock_visible();
		me._btn_audio_off.logicBlock_visible();
		me._btn_share.logicBlock_position();
		me._btn_share.logicBlock_visible();
		me._btn_share.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_share']=false;
		me._btn_copy.logicBlock_position();
		me._btn_copy.logicBlock_visible();
		me._btn_twitter.logicBlock_position();
		me._btn_twitter.logicBlock_visible();
		me._btn_facebook.logicBlock_visible();
		me._btn_info.logicBlock_position();
		me._btn_info.logicBlock_size();
		me._btn_info.logicBlock_visible();
		me._btn_info.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_info']=false;
		me._btn_floorplan.logicBlock_position();
		me._btn_floorplan.logicBlock_size();
		me._btn_floorplan.logicBlock_visible();
		me._btn_floorplan.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_floorplan']=false;
		me._floorplan.ggInitMap=function() {};
		me._floorplan.ggInitMapMarkers=function() {};
		me._floorplan.ggClearMap=function() {};
		me._btn_map.logicBlock_size();
		me._btn_map.logicBlock_visible();
		me._btn_map.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_map']=false;
		me._map.ggInitMap=function() {};
		me._map.ggInitMapMarkers=function() {};
		me._map.ggClearMap=function() {};
		me._map_timer.logicBlock_visible();
		me._button_container_phone.logicBlock_visible();
		me._btn_thumbnails_phone.logicBlock_visible();
		me._btn_thumbnails_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_thumbnails_phone']=false;
		me._btn_languages_phone.logicBlock_position();
		me._btn_languages_phone.logicBlock_visible();
		me._btn_languages_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_languages_phone']=false;
		me._btn_fullscreen_phone.logicBlock_position();
		me._btn_fullscreen_phone.logicBlock_visible();
		me._btn_fullscreen_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_fullscreen_phone']=false;
		me._btn_fullscreen_exit_phone.logicBlock_visible();
		me._btn_fullscreen_enter_phone.logicBlock_visible();
		me._btn_gyro_phone.logicBlock_position();
		me._btn_gyro_phone.logicBlock_visible();
		me._btn_gyro_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_gyro_phone']=false;
		me._btn_gyro_on_icon_phone.logicBlock_visible();
		me._btn_gyro_off_icon_phone.logicBlock_visible();
		me._btn_vr_phone.logicBlock_position();
		me._btn_vr_phone.logicBlock_visible();
		me._btn_vr_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_vr_phone']=false;
		me._btn_audio_phone.logicBlock_position();
		me._btn_audio_phone.logicBlock_visible();
		me._btn_audio_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_audio_phone']=false;
		me._btn_audio_on_phone.logicBlock_visible();
		me._btn_audio_off_phone.logicBlock_visible();
		me._btn_share_phone.logicBlock_position();
		me._btn_share_phone.logicBlock_visible();
		me._btn_share_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_share_phone']=false;
		me._btn_copy_phone.logicBlock_position();
		me._btn_copy_phone.logicBlock_visible();
		me._btn_twitter_phone.logicBlock_position();
		me._btn_twitter_phone.logicBlock_visible();
		me._btn_facebook_phone.logicBlock_visible();
		me._btn_map_phone.logicBlock_position();
		me._btn_map_phone.logicBlock_visible();
		me._btn_map_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_map_phone']=false;
		me._btn_floorplan_phone.logicBlock_position();
		me._btn_floorplan_phone.logicBlock_visible();
		me._btn_floorplan_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_floorplan_phone']=false;
		me._btn_info_phone.logicBlock_position();
		me._btn_info_phone.logicBlock_visible();
		me._btn_info_phone.logicBlock_backgroundcolor();
		me.elementMouseOver['btn_info_phone']=false;
		me._project_title_phone.logicBlock_visible();
		me._project_title.logicBlock_size();
		me._project_title.logicBlock_visible();
		me._thumbnail_scroller.logicBlock_visible();
		me._thumbnail_scroller.logicBlock_alpha();
		me._languages_popup.logicBlock_alpha();
		me._languages_popup.logicBlock_backgroundcolor();
		me.elementMouseOver['languages_popup']=false;
		me._screen_tint.logicBlock_alpha();
		me._ht_video_popup.logicBlock_visible();
		me._video_controller.logicBlock_visible();
		me._ht_video_popup_youtube.logicBlock_visible();
		me._ht_video_popup_youtube.ggVideoSource = '';
		me._ht_video_popup_youtube.ggVideoNotLoaded = true;
		me._ht_video_popup_vimeo.logicBlock_visible();
		me._ht_video_popup_vimeo.ggVideoSource = '';
		me._ht_video_popup_vimeo.ggVideoNotLoaded = true;
		me._ht_video_popup_file.logicBlock_visible();
		me._ht_video_popup_file.ggVideoSource = 'media/';
		me._ht_video_popup_file.ggVideoNotLoaded = true;
		me._ht_video_popup_file_play.logicBlock_visible();
		me._ht_video_popup_file_play.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_video_popup_file_play']=false;
		me._ht_video_popup_url.logicBlock_visible();
		me._ht_video_popup_url.ggVideoSource = 'media/';
		me._ht_video_popup_url.ggVideoNotLoaded = true;
		me._ht_video_popup_url_play.logicBlock_visible();
		me._ht_video_popup_url_play.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_video_popup_url_play']=false;
		me._ht_image_popup_fs.logicBlock_visible();
		me._ht_pdf_popup.logicBlock_visible();
		me._ht_url_popup.logicBlock_visible();
		me._sounds_splashscreen.logicBlock_visible();
		me._sounds_off_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['sounds_off_bg']=false;
		me._sounds_on_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['sounds_on_bg']=false;
		me._screentint_phone.logicBlock_alpha();
		me.elementMouseOver['btn_close_popup_phone']=false;
		me._info_popup_phone.logicBlock_visible();
		me._thumbnail_scroller_phone.logicBlock_visible();
		me._map_el_phone.ggInitMap=function() {};
		me._map_el_phone.ggInitMapMarkers=function() {};
		me._map_el_phone.ggClearMap=function() {};
		me._map_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggInitMap=function() {};
		me._floorplan_el_phone.ggInitMapMarkers=function() {};
		me._floorplan_el_phone.ggClearMap=function() {};
		me._floorplan_el_phone.logicBlock_visible();
		me._image_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggVideoSource = '';
		me._youtube_popup_phone.ggVideoNotLoaded = true;
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggVideoSource = '';
		me._vimeo_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.ggVideoSource = 'media/';
		me._video_file_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone_play.logicBlock_visible();
		me._video_file_popup_phone_play.logicBlock_backgroundcolor();
		me.elementMouseOver['video_file_popup_phone_play']=false;
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.ggVideoSource = 'media/';
		me._video_url_popup_phone.ggVideoNotLoaded = true;
		me._video_url_popup_phone_play.logicBlock_visible();
		me._video_url_popup_phone_play.logicBlock_backgroundcolor();
		me.elementMouseOver['video_url_popup_phone_play']=false;
		el = me._local_fonts;
		;
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_activehotspotchanged();
				}
			}
			me._btn_info.logicBlock_visible();
			me._btn_info_phone.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_opt_share.logicBlock();
			me._variable_width_share_container.logicBlock();
			me._button_container.logicBlock_visible();
			me._btn_thumbnails.logicBlock_visible();
			me._btn_fullscreen.logicBlock_visible();
			me._btn_languages.logicBlock_position();
			me._btn_languages.logicBlock_visible();
			me._btn_gyro.logicBlock_position();
			me._btn_gyro.logicBlock_visible();
			me._btn_gyro_on_icon.logicBlock_visible();
			me._btn_gyro_off_icon.logicBlock_visible();
			me._btn_vr.logicBlock_position();
			me._btn_vr.logicBlock_visible();
			me._btn_audio.logicBlock_position();
			me._btn_audio.logicBlock_visible();
			me._btn_audio_on.logicBlock_visible();
			me._btn_audio_off.logicBlock_visible();
			me._btn_share.logicBlock_position();
			me._btn_share.logicBlock_visible();
			me._btn_copy.logicBlock_position();
			me._btn_copy.logicBlock_visible();
			me._btn_twitter.logicBlock_position();
			me._btn_twitter.logicBlock_visible();
			me._btn_facebook.logicBlock_visible();
			me._btn_info.logicBlock_position();
			me._btn_info.logicBlock_size();
			me._btn_info.logicBlock_visible();
			me._btn_floorplan.logicBlock_position();
			me._btn_floorplan.logicBlock_size();
			me._btn_floorplan.logicBlock_visible();
			me._btn_map.logicBlock_size();
			me._btn_map.logicBlock_visible();
			me._map_timer.logicBlock_visible();
			me._button_container_phone.logicBlock_visible();
			me._btn_thumbnails_phone.logicBlock_visible();
			me._btn_languages_phone.logicBlock_visible();
			me._btn_fullscreen_phone.logicBlock_visible();
			me._btn_gyro_phone.logicBlock_position();
			me._btn_gyro_phone.logicBlock_visible();
			me._btn_gyro_on_icon_phone.logicBlock_visible();
			me._btn_gyro_off_icon_phone.logicBlock_visible();
			me._btn_vr_phone.logicBlock_position();
			me._btn_vr_phone.logicBlock_visible();
			me._btn_audio_phone.logicBlock_position();
			me._btn_audio_phone.logicBlock_visible();
			me._btn_audio_on_phone.logicBlock_visible();
			me._btn_audio_off_phone.logicBlock_visible();
			me._btn_share_phone.logicBlock_position();
			me._btn_share_phone.logicBlock_visible();
			me._btn_copy_phone.logicBlock_position();
			me._btn_copy_phone.logicBlock_visible();
			me._btn_twitter_phone.logicBlock_position();
			me._btn_twitter_phone.logicBlock_visible();
			me._btn_facebook_phone.logicBlock_visible();
			me._btn_map_phone.logicBlock_position();
			me._btn_map_phone.logicBlock_visible();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_visible();
			me._btn_info_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._project_title.logicBlock_size();
			me._project_title.logicBlock_visible();
			me._thumbnail_scroller.logicBlock_visible();
			me._thumbnail_scroller.logicBlock_alpha();
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
			me._languages_popup.logicBlock_alpha();
			me._languages_cloner.ggUpdateConditionNodeChange();
			me._screen_tint.logicBlock_alpha();
			me._ht_video_popup.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._video_controller_seekbar.ggConnectToMediaEl();
			me._ht_video_popup_youtube.logicBlock_visible();
			me._ht_video_popup_vimeo.logicBlock_visible();
			me._ht_video_popup_file.logicBlock_visible();
			me._ht_video_popup_file_play.logicBlock_visible();
			me._ht_video_popup_url.logicBlock_visible();
			me._ht_video_popup_url_play.logicBlock_visible();
			me._ht_image_popup_fs.logicBlock_visible();
			me._ht_pdf_popup.logicBlock_visible();
			me._ht_url_popup.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._node_cloner_phone.ggUpdateConditionNodeChange();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_opt_maps.logicBlock();
			me._variable_opt_floorplans.logicBlock();
			me._variable_opt_share.logicBlock();
			me._variable_width_share_container.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._button_container.logicBlock_visible();
			if (player.transitionsDisabled) {
				me._button_container.style.transition='none';
			} else {
				me._button_container.style.transition='all 500ms ease-out 800ms';
			}
			me._button_container.style.opacity='1';
			me._button_container.style.visibility=me._button_container.ggVisible?'inherit':'hidden';
			me._btn_thumbnails.logicBlock_visible();
			me._btn_fullscreen.logicBlock_position();
			me._btn_fullscreen.logicBlock_visible();
			me._btn_languages.logicBlock_position();
			me._btn_languages.logicBlock_visible();
			me._btn_gyro.logicBlock_position();
			me._btn_gyro.logicBlock_visible();
			me._btn_vr.logicBlock_position();
			me._btn_vr.logicBlock_visible();
			me._btn_audio.logicBlock_position();
			me._btn_audio.logicBlock_visible();
			me._btn_audio_on.logicBlock_visible();
			me._btn_audio_off.logicBlock_visible();
			me._btn_share.logicBlock_position();
			me._btn_share.logicBlock_visible();
			me._btn_copy.logicBlock_position();
			me._btn_copy.logicBlock_visible();
			me._btn_twitter.logicBlock_position();
			me._btn_twitter.logicBlock_visible();
			me._btn_facebook.logicBlock_visible();
			me._btn_info.logicBlock_position();
			me._btn_info.logicBlock_size();
			me._btn_info.logicBlock_visible();
			me._btn_floorplan.logicBlock_position();
			me._btn_floorplan.logicBlock_size();
			me._btn_floorplan.logicBlock_visible();
			me._btn_map.logicBlock_size();
			me._btn_map.logicBlock_visible();
			me._button_container_phone.logicBlock_visible();
			if (player.transitionsDisabled) {
				me._button_container_phone.style.transition='none';
			} else {
				me._button_container_phone.style.transition='all 500ms ease-out 800ms';
			}
			me._button_container_phone.style.opacity='1';
			me._button_container_phone.style.visibility=me._button_container_phone.ggVisible?'inherit':'hidden';
			me._btn_thumbnails_phone.logicBlock_visible();
			me._btn_languages_phone.logicBlock_position();
			me._btn_languages_phone.logicBlock_visible();
			me._btn_fullscreen_phone.logicBlock_position();
			me._btn_fullscreen_phone.logicBlock_visible();
			me._btn_gyro_phone.logicBlock_position();
			me._btn_gyro_phone.logicBlock_visible();
			me._btn_vr_phone.logicBlock_position();
			me._btn_vr_phone.logicBlock_visible();
			me._btn_audio_phone.logicBlock_position();
			me._btn_audio_phone.logicBlock_visible();
			me._btn_audio_on_phone.logicBlock_visible();
			me._btn_audio_off_phone.logicBlock_visible();
			me._btn_share_phone.logicBlock_position();
			me._btn_share_phone.logicBlock_visible();
			me._btn_copy_phone.logicBlock_position();
			me._btn_copy_phone.logicBlock_visible();
			me._btn_twitter_phone.logicBlock_position();
			me._btn_twitter_phone.logicBlock_visible();
			me._btn_facebook_phone.logicBlock_visible();
			me._btn_map_phone.logicBlock_position();
			me._btn_map_phone.logicBlock_visible();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_visible();
			me._btn_info_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._project_title.logicBlock_size();
			me._project_title.logicBlock_visible();
			me._thumbnail_scroller.ggUpdatePosition();
			me._thumbnail_scroller.logicBlock_visible();
			me._thumbnail_scroller.logicBlock_alpha();
			me._languages_popup.logicBlock_alpha();
			me._languages_scroller.ggUpdatePosition();
			me._languages_cloner.ggTranslations = player.getProjectTranslations();
			me._languages_cloner.ggUpdate();
			me._screen_tint.logicBlock_alpha();
			me._ht_video_popup.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._ht_video_popup_youtube.logicBlock_visible();
			me._ht_video_popup_vimeo.logicBlock_visible();
			me._ht_video_popup_file.logicBlock_visible();
			me._ht_video_popup_file_play.logicBlock_visible();
			me._ht_video_popup_url.logicBlock_visible();
			me._ht_video_popup_url_play.logicBlock_visible();
			me._ht_image_popup_fs.logicBlock_visible();
			me._ht_pdf_popup.logicBlock_visible();
			me._ht_url_popup.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.ggUpdatePosition();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._btn_fullscreen_exit.logicBlock_visible();
			me._btn_fullscreen_enter.logicBlock_visible();
			me._btn_fullscreen_exit_phone.logicBlock_visible();
			me._btn_fullscreen_enter_phone.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._btn_fullscreen_exit.logicBlock_visible();
			me._btn_fullscreen_enter.logicBlock_visible();
			me._btn_fullscreen_exit_phone.logicBlock_visible();
			me._btn_fullscreen_enter_phone.logicBlock_visible();
		});
		player.addListener('gyroavailable', function(event) {
			me._btn_gyro.logicBlock_visible();
			me._btn_vr.logicBlock_position();
			me._btn_audio.logicBlock_position();
			me._btn_share.logicBlock_position();
			me._btn_gyro_phone.logicBlock_visible();
			me._btn_vr_phone.logicBlock_position();
			me._btn_audio_phone.logicBlock_position();
			me._btn_share_phone.logicBlock_position();
			me._btn_map_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_position();
		});
		player.addListener('gyrochanged', function(event) {
			me._btn_gyro_on_icon.logicBlock_visible();
			me._btn_gyro_off_icon.logicBlock_visible();
			me._btn_gyro_on_icon_phone.logicBlock_visible();
			me._btn_gyro_off_icon_phone.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_hastouch();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
			me._variable_resp_phone_landscape.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._btn_fullscreen.logicBlock_visible();
			me._btn_languages.logicBlock_position();
			me._btn_gyro.logicBlock_position();
			me._btn_vr.logicBlock_position();
			me._btn_audio.logicBlock_position();
			me._btn_share.logicBlock_position();
			me._btn_fullscreen_phone.logicBlock_visible();
			me._btn_gyro_phone.logicBlock_position();
			me._btn_vr_phone.logicBlock_position();
			me._btn_audio_phone.logicBlock_position();
			me._btn_share_phone.logicBlock_position();
			me._btn_map_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_position();
		});
		player.addListener('varchanged_open_image_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_open_image_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_info_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_open_info_hotspots();
				}
			}
		});
		player.addListener('varchanged_opt_floorplans', function(event) {
			me._btn_info.logicBlock_position();
			me._btn_info.logicBlock_size();
			me._btn_floorplan.logicBlock_visible();
			me._btn_map.logicBlock_size();
			me._btn_floorplan_phone.logicBlock_visible();
			me._btn_info_phone.logicBlock_position();
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._btn_fullscreen.logicBlock_visible();
			me._btn_languages.logicBlock_position();
			me._btn_gyro.logicBlock_position();
			me._btn_vr.logicBlock_position();
			me._btn_audio.logicBlock_position();
			me._btn_share.logicBlock_position();
			me._btn_fullscreen_phone.logicBlock_visible();
			me._btn_gyro_phone.logicBlock_position();
			me._btn_vr_phone.logicBlock_position();
			me._btn_audio_phone.logicBlock_position();
			me._btn_share_phone.logicBlock_position();
			me._btn_map_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_position();
		});
		player.addListener('varchanged_opt_gyro', function(event) {
			me._btn_gyro.logicBlock_visible();
			me._btn_vr.logicBlock_position();
			me._btn_audio.logicBlock_position();
			me._btn_share.logicBlock_position();
			me._btn_gyro_phone.logicBlock_visible();
			me._btn_vr_phone.logicBlock_position();
			me._btn_audio_phone.logicBlock_position();
			me._btn_share_phone.logicBlock_position();
			me._btn_map_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_position();
		});
		player.addListener('varchanged_opt_info', function(event) {
			me._btn_info.logicBlock_visible();
			me._btn_floorplan.logicBlock_position();
			me._btn_floorplan.logicBlock_size();
			me._btn_map.logicBlock_size();
			me._btn_info_phone.logicBlock_visible();
		});
		player.addListener('varchanged_opt_maps', function(event) {
			me._btn_info.logicBlock_position();
			me._btn_info.logicBlock_size();
			me._btn_floorplan.logicBlock_position();
			me._btn_floorplan.logicBlock_size();
			me._btn_map.logicBlock_visible();
			me._btn_map_phone.logicBlock_visible();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_position();
		});
		player.addListener('varchanged_opt_proj_title', function(event) {
			me._project_title_phone.logicBlock_visible();
			me._project_title.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share', function(event) {
			me._btn_share.logicBlock_visible();
			me._btn_share_phone.logicBlock_visible();
			me._btn_map_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_position();
		});
		player.addListener('varchanged_opt_share_copy', function(event) {
			me._variable_opt_share.logicBlock();
			me._variable_width_share_container.logicBlock();
			me._btn_copy.logicBlock_position();
			me._btn_copy.logicBlock_visible();
			me._btn_copy_phone.logicBlock_position();
			me._btn_copy_phone.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_facebook', function(event) {
			me._variable_opt_share.logicBlock();
			me._variable_width_share_container.logicBlock();
			me._btn_copy.logicBlock_position();
			me._btn_twitter.logicBlock_position();
			me._btn_facebook.logicBlock_visible();
			me._btn_copy_phone.logicBlock_position();
			me._btn_twitter_phone.logicBlock_position();
			me._btn_facebook_phone.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_twitter', function(event) {
			me._variable_opt_share.logicBlock();
			me._variable_width_share_container.logicBlock();
			me._btn_copy.logicBlock_position();
			me._btn_twitter.logicBlock_position();
			me._btn_twitter.logicBlock_visible();
			me._btn_copy_phone.logicBlock_position();
			me._btn_twitter_phone.logicBlock_position();
			me._btn_twitter_phone.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._project_title_phone.logicBlock_visible();
			me._project_title.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone_landscape', function(event) {
			me._button_container.logicBlock_visible();
			me._button_container_phone.logicBlock_visible();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_toggle_audio', function(event) {
			me._btn_audio_on.logicBlock_visible();
			me._btn_audio_off.logicBlock_visible();
			me._btn_audio_on_phone.logicBlock_visible();
			me._btn_audio_off_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_floorplan', function(event) {
			me._btn_info.logicBlock_position();
			me._btn_floorplan.logicBlock_size();
			me._project_title.logicBlock_size();
		});
		player.addListener('varchanged_vis_image_popup', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_image_popup();
				}
			}
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_alpha();
			me._ht_image_popup_fs.logicBlock_visible();
		});
		player.addListener('varchanged_vis_info', function(event) {
			me._btn_info.logicBlock_size();
			me._project_title.logicBlock_size();
		});
		player.addListener('varchanged_vis_languages', function(event) {
			me._languages_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_map', function(event) {
			me._btn_info.logicBlock_position();
			me._btn_floorplan.logicBlock_position();
			me._btn_map.logicBlock_size();
			me._project_title.logicBlock_size();
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_alpha();
			me._ht_pdf_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_floorplan', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._floorplan_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._image_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_map', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._map_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._pdf_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_thumbs', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._thumbnail_scroller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._vimeo_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._youtube_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_share', function(event) {
			if (
				(
					((player.getVariableValue('vis_share') == true))
				)
			) {
				if (player.transitionsDisabled) {
					me._btn_share.style.transition='none';
				} else {
					me._btn_share.style.transition='all 500ms ease-in-out 0ms';
				}
				me._btn_share.style.width = '' + player.getVariableValue('width_share_container', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) + 'px';
				me._btn_share.style.height = '50px';
				var that = me;
				var el = me._btn_share;
				setTimeout(function() {me = that; el.ggUpdatePosition();}, 550);
				setTimeout(function() {skin.updateSize(me._btn_share);}, 550);
			}
			if (
				(
					((player.getVariableValue('vis_share') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._btn_share.style.transition='none';
				} else {
					me._btn_share.style.transition='all 500ms ease-in-out 0ms';
				}
				me._btn_share.style.width = '50px';
				me._btn_share.style.height = '50px';
				var that = me;
				var el = me._btn_share;
				setTimeout(function() {me = that; el.ggUpdatePosition();}, 550);
				setTimeout(function() {skin.updateSize(me._btn_share);}, 550);
			}
			if (
				(
					((player.getVariableValue('vis_share') == true))
				)
			) {
				if (player.transitionsDisabled) {
					me._share_btns_container.style.transition='none';
				} else {
					me._share_btns_container.style.transition='all 200ms ease-out 500ms';
				}
				me._share_btns_container.style.opacity='1';
				me._share_btns_container.style.visibility=me._share_btns_container.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('vis_share') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._share_btns_container.style.transition='none';
				} else {
					me._share_btns_container.style.transition='all 200ms ease-out 0ms';
				}
				me._share_btns_container.style.opacity='0';
				me._share_btns_container.style.visibility='hidden';
			}
			if (
				(
					((player.getVariableValue('vis_share') == true))
				)
			) {
				if (player.transitionsDisabled) {
					me._btn_share_phone.style.transition='none';
				} else {
					me._btn_share_phone.style.transition='all 500ms ease-in-out 0ms';
				}
				me._btn_share_phone.style.width = '50px';
				me._btn_share_phone.style.height = '' + player.getVariableValue('width_share_container', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) + 'px';
				var that = me;
				var el = me._btn_share_phone;
				setTimeout(function() {me = that; el.ggUpdatePosition();}, 550);
				setTimeout(function() {skin.updateSize(me._btn_share_phone);}, 550);
			}
			if (
				(
					((player.getVariableValue('vis_share') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._btn_share_phone.style.transition='none';
				} else {
					me._btn_share_phone.style.transition='all 500ms ease-in-out 0ms';
				}
				me._btn_share_phone.style.width = '50px';
				me._btn_share_phone.style.height = '50px';
				var that = me;
				var el = me._btn_share_phone;
				setTimeout(function() {me = that; el.ggUpdatePosition();}, 550);
				setTimeout(function() {skin.updateSize(me._btn_share_phone);}, 550);
			}
			if (
				(
					((player.getVariableValue('vis_share') == true))
				)
			) {
				if (player.transitionsDisabled) {
					me._share_btns_container_phone.style.transition='none';
				} else {
					me._share_btns_container_phone.style.transition='all 200ms ease-out 500ms';
				}
				me._share_btns_container_phone.style.opacity='1';
				me._share_btns_container_phone.style.visibility=me._share_btns_container_phone.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('vis_share') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._share_btns_container_phone.style.transition='none';
				} else {
					me._share_btns_container_phone.style.transition='all 200ms ease-out 0ms';
				}
				me._share_btns_container_phone.style.opacity='0';
				me._share_btns_container_phone.style.visibility='hidden';
			}
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			me._btn_thumbnails.logicBlock_visible();
			me._btn_fullscreen.logicBlock_visible();
			me._btn_languages.logicBlock_visible();
			me._btn_gyro.logicBlock_visible();
			me._btn_vr.logicBlock_visible();
			me._btn_audio.logicBlock_visible();
			me._btn_share.logicBlock_visible();
			me._btn_info.logicBlock_visible();
			me._btn_floorplan.logicBlock_visible();
			me._btn_map.logicBlock_visible();
			me._btn_thumbnails_phone.logicBlock_visible();
			me._btn_languages_phone.logicBlock_visible();
			me._btn_fullscreen_phone.logicBlock_visible();
			me._btn_gyro_phone.logicBlock_visible();
			me._btn_vr_phone.logicBlock_visible();
			me._btn_audio_phone.logicBlock_visible();
			me._btn_share_phone.logicBlock_visible();
			me._btn_map_phone.logicBlock_visible();
			me._btn_floorplan_phone.logicBlock_visible();
			me._btn_info_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._thumbnail_scroller.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbnails', function(event) {
			me._thumbnail_scroller.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_alpha();
			me._ht_url_popup.logicBlock_visible();
			if (
				(
					((player.getVariableValue('vis_url_popup') == false))
				)
			) {
					me._ht_url_popup.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._ht_url_popup.ggUpdateText();
				me._ht_url_popup.ggTextDiv.scrollTop = 0;
			}
		});
		player.addListener('varchanged_vis_video_file_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_alpha();
			me._ht_video_popup.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._ht_video_popup_file.logicBlock_visible();
			me._ht_video_popup_file_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_alpha();
			me._ht_video_popup.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._ht_video_popup_url.logicBlock_visible();
			me._ht_video_popup_url_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_vimeo_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_alpha();
			me._ht_video_popup.logicBlock_visible();
			me._ht_video_popup_vimeo.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_youtube_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_alpha();
			me._ht_video_popup.logicBlock_visible();
			me._ht_video_popup_youtube.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._thumbnail_cloner.ggUpdate();
			me._languages_cloner.ggUpdate();
			me._node_cloner_phone.ggUpdate();
		});
		player.addListener('vrchanged', function(event) {
			me._btn_vr.logicBlock_visible();
			me._btn_audio.logicBlock_position();
			me._btn_share.logicBlock_position();
			me._btn_vr_phone.logicBlock_visible();
			me._btn_audio_phone.logicBlock_position();
			me._btn_share_phone.logicBlock_position();
			me._btn_map_phone.logicBlock_position();
			me._btn_floorplan_phone.logicBlock_position();
			me._btn_info_phone.logicBlock_position();
		});
	};
	function SkinCloner_node_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_image_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image_phone";
		el.ggDx=0;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.83,sy:0.83,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._thumbnail_image_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image_phone.onclick=function (e) {
			if (me._thumbnail_image_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_phone_thumbs', false);
		}
		me._thumbnail_image_phone.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_image_phone']=true;
			me._thumbnail_border_phone.logicBlock_alpha();
		}
		me._thumbnail_image_phone.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_image_phone']=false;
			me._thumbnail_border_phone.logicBlock_alpha();
		}
		me._thumbnail_image_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_title_phone);
		el=me._thumbnail_border_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 2px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_image_phone'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border_phone.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border_phone.style.visibility=me._thumbnail_border_phone.ggVisible?'inherit':'hidden';
					me._thumbnail_border_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border_phone.style.opacity == 0.0) { me._thumbnail_border_phone.style.visibility="hidden"; } }, 105);
					me._thumbnail_border_phone.style.opacity=0;
				}
			}
		}
		me._thumbnail_border_phone.logicBlock_alpha();
		me._thumbnail_border_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_border_phone);
		el=me._thumbnail_visited_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5bGluZSBzdHJva2'+
			'U9IiNjMmU4MTIiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcG9pbnRzPSIzMCw5ICYjeGE7JiN4OTsxMy41LDI1LjUgNiwxOCAiLz4KPC9zdmc+Cg==';
		me._thumbnail_visited_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited_phone.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited_phone.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited_phone.style.transition='';
				if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited_phone.style.visibility=(Number(me._thumbnail_visited_phone.style.opacity)>0||!me._thumbnail_visited_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited_phone.ggVisible=true;
				}
				else {
					me._thumbnail_visited_phone.style.visibility="hidden";
					me._thumbnail_visited_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited_phone.logicBlock_visible();
		me._thumbnail_visited_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_visited_phone);
		me.__div.appendChild(me._thumbnail_image_phone);
		me.elementMouseOver['thumbnail_image_phone']=false;
		me._thumbnail_border_phone.logicBlock_alpha();
		me._thumbnail_visited_phone.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_visited_phone.logicBlock_visible();
				me._thumbnail_visited_phone.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited_phone.logicBlock_visible();
			};
	};
	function SkinCloner_languages_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._language_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._language_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._language_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="language_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text karla";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._language_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._language_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._language_title.ggUpdateText();
		});
		el.appendChild(els);
		me._language_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._language_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['language_title'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._language_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._language_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._language_title.style.transition='color 0s';
				if (me._language_title.ggCurrentLogicStateTextColor == 0) {
					me._language_title.style.color="rgba(194,232,18,1)";
				}
				else {
					me._language_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._language_title.logicBlock_textcolor();
		me._language_title.onclick=function (e) {
			if (me._language_title.isDragging()) return;
			player.setLanguage(me.ggTag);
			player.setVariableValue('vis_languages', false);
		}
		me._language_title.onmouseenter=function (e) {
			me.elementMouseOver['language_title']=true;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.onmouseleave=function (e) {
			me.elementMouseOver['language_title']=false;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._language_title);
		me._language_title.logicBlock_textcolor();
		me.elementMouseOver['language_title']=false;
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_image=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image);
		el=me._thumbnail_tint=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_tint;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_tint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_tint.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_tint.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_tint.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_tint.style.transition='background-color 100ms ease 0ms';
				if (me._thumbnail_tint.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_tint.style.backgroundColor="rgba(0,0,0,0.313726)";
				}
				else {
					me._thumbnail_tint.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_tint.logicBlock_backgroundcolor();
		me._thumbnail_tint.onclick=function (e) {
			if (me._thumbnail_tint.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_tint.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_tint']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_border.logicBlock_alpha();
			me._thumbnail_tint.logicBlock_backgroundcolor();
		}
		me._thumbnail_tint.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_tint']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_border.logicBlock_alpha();
			me._thumbnail_tint.logicBlock_backgroundcolor();
		}
		me._thumbnail_tint.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style.transition='opacity 200ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title.style.opacity == 0.0) { me._thumbnail_title.style.visibility="hidden"; } }, 205);
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.logicBlock_alpha();
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint.appendChild(me._thumbnail_title);
		el=me._thumbnail_border=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 2px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border.style.visibility=me._thumbnail_border.ggVisible?'inherit':'hidden';
					me._thumbnail_border.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border.style.opacity == 0.0) { me._thumbnail_border.style.visibility="hidden"; } }, 105);
					me._thumbnail_border.style.opacity=0;
				}
			}
		}
		me._thumbnail_border.logicBlock_alpha();
		me._thumbnail_border.onclick=function (e) {
			if (me._thumbnail_border.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_border.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint.appendChild(me._thumbnail_border);
		me.__div.appendChild(me._thumbnail_tint);
		el=me._thumbnail_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5bGluZSBzdHJva2'+
			'U9IiNjMmU4MTIiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcG9pbnRzPSIzMCw5ICYjeGE7JiN4OTsxMy41LDI1LjUgNiwxOCAiLz4KPC9zdmc+Cg==';
		me._thumbnail_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited.style.transition='';
				if (me._thumbnail_visited.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited.style.visibility=(Number(me._thumbnail_visited.style.opacity)>0||!me._thumbnail_visited.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited.ggVisible=true;
				}
				else {
					me._thumbnail_visited.style.visibility="hidden";
					me._thumbnail_visited.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited.logicBlock_visible();
		me._thumbnail_visited.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited);
		me._thumbnail_tint.logicBlock_backgroundcolor();
		me.elementMouseOver['thumbnail_tint']=false;
		me._thumbnail_title.logicBlock_alpha();
		me._thumbnail_border.logicBlock_alpha();
		me._thumbnail_visited.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_visited.logicBlock_visible();
				me._thumbnail_visited.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited.logicBlock_visible();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="map_pin";
		el.ggDx=22;
		el.ggDy=-186;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 16px;';
		hs+='left : calc(50% - ((16px + 0px) / 2) + 22px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 0px) / 2) - 186px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._pin_tooltip=document.createElement('div');
		els=me._pin_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pin_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text karla";
		el.ggType='text';
		hs ='';
		hs+='bottom : -24px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='min-width: 50px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 6px;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 29px 5px 5px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pin_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pin_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._pin_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._pin_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._pin_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pin_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pin_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pin_tooltip.style.transition='';
				if (me._pin_tooltip.ggCurrentLogicStateVisible == 0) {
					me._pin_tooltip.style.visibility="hidden";
					me._pin_tooltip.ggVisible=false;
				}
				else {
					me._pin_tooltip.style.visibility=(Number(me._pin_tooltip.style.opacity)>0||!me._pin_tooltip.style.opacity)?'inherit':'hidden';
					me._pin_tooltip.ggVisible=true;
				}
			}
		}
		me._pin_tooltip.logicBlock_visible();
		me._pin_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._pin_tooltip);
		el=me._pin_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/pin_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggId="pin_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pin_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._pin_anim.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me._pin_tooltip.style.transition='none';
			} else {
				me._pin_tooltip.style.transition='all 200ms ease-out 0ms';
			}
			me._pin_tooltip.ggParameter.sx=1;me._pin_tooltip.ggParameter.sy=1;
			me._pin_tooltip.style.transform=parameterToTransform(me._pin_tooltip.ggParameter);
			setTimeout(function() {skin.updateSize(me._pin_tooltip);}, 250);
			if (player.transitionsDisabled) {
				me._pin_tooltip.style.transition='none';
			} else {
				me._pin_tooltip.style.transition='all 200ms ease-out 0ms';
			}
			me._pin_tooltip.style.opacity='1';
			me._pin_tooltip.style.visibility=me._pin_tooltip.ggVisible?'inherit':'hidden';
			me.elementMouseOver['pin_anim']=true;
		}
		me._pin_anim.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._pin_tooltip.style.transition='none';
			} else {
				me._pin_tooltip.style.transition='all 200ms ease-out 0ms';
			}
			me._pin_tooltip.ggParameter.sx=0.7;me._pin_tooltip.ggParameter.sy=0.7;
			me._pin_tooltip.style.transform=parameterToTransform(me._pin_tooltip.ggParameter);
			setTimeout(function() {skin.updateSize(me._pin_tooltip);}, 250);
			if (player.transitionsDisabled) {
				me._pin_tooltip.style.transition='none';
			} else {
				me._pin_tooltip.style.transition='all 200ms ease-out 0ms';
			}
			me._pin_tooltip.style.opacity='0';
			me._pin_tooltip.style.visibility='hidden';
			me.elementMouseOver['pin_anim']=false;
		}
		me._pin_anim.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._pin_anim);
		me._pin_tooltip.logicBlock_visible();
		me._pin_anim.ggLottie.loop = false;
		me._pin_anim.addEventListener('mouseenter', function() {
			me._pin_anim.ggLottie.stop();
			me._pin_anim.ggLottie.setDirection(1);
			me._pin_anim.ggLottie.play();
		});
		me._pin_anim.ggLottie.addEventListener('complete', function() {
			if(me._pin_anim.ggLottie.currentFrame == 0) {
				me._pin_anim.ggLottie.setDirection(1);
			}
		});
		me._pin_anim.addEventListener('mouseleave', function() {
			me._pin_anim.ggLottie.setDirection(-1);
			me._pin_anim.ggLottie.play();
		});
		me.elementMouseOver['pin_anim']=false;
			me.ggEvent_activehotspotchanged=function() {
				me._pin_tooltip.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._pin_tooltip.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._pin_tooltip.logicBlock_visible();
			};
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 142px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style.transition='';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
				else {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
			}
		}
		me._ht_url.logicBlock_visible();
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url_popup') == false)) || 
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._ht_url_popup.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.url)));
						var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._ht_url_popup.ggUpdateText();
				skin._ht_url_popup.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_popup', true);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_bg=document.createElement('div');
		el.ggId="ht_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_bg.style.transition='background-color 100ms ease 0ms';
				if (me._ht_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_url_bg.style.visibility="hidden";
					me._ht_url_bg.ggVisible=false;
				}
				else {
					me._ht_url_bg.style.visibility=(Number(me._ht_url_bg.style.opacity)>0||!me._ht_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_url_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_url_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_url_bg.style.transition='background-color 100ms ease 0ms';
				if (me._ht_url_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_url_bg.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._ht_url_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._ht_url_bg.logicBlock_backgroundcolor();
		me._ht_url_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_url_bg']=true;
			me._ht_url_title.logicBlock_alpha();
			me._ht_url_bg.logicBlock_backgroundcolor();
		}
		me._ht_url_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_url_bg']=false;
			me._ht_url_title.logicBlock_alpha();
			me._ht_url_bg.logicBlock_backgroundcolor();
		}
		me._ht_url_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_title=document.createElement('div');
		els=me._ht_url_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_url_title";
		el.ggDx=0;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 34px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_url_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_url_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_url_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_url_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_url_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_url_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_url_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_url_title.ggCurrentLogicStatePosition == 0) {
					me._ht_url_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_url_title.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -34px)';
				}
				else {
					me._ht_url_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_url_title.style.top='calc(50% - ((0px + 0px) / 2) + 34px)';
				}
			}
		}
		me._ht_url_title.logicBlock_position();
		me._ht_url_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_url_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_url_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_url_title.style.visibility=me._ht_url_title.ggVisible?'inherit':'hidden';
					me._ht_url_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_url_title.style.opacity == 0.0) { me._ht_url_title.style.visibility="hidden"; } }, 305);
					me._ht_url_title.style.opacity=0;
				}
			}
		}
		me._ht_url_title.logicBlock_alpha();
		me._ht_url_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url_bg.appendChild(me._ht_url_title);
		el=me._ht_url_icon=document.createElement('div');
		els=me._ht_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyMCAyMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAyMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNjMmU4MTI7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxjaXJjbGUgY2xhc3M9InN0MCIgcj0iOC4zIiBjeD0iMTAiIGN5PSIxMCIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDI9IjE4LjMiIHkyPSIxMCIgeTE9IjEwIiB4MT0iMS43Ii8+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAsMS43YzIuMSwyLjMsMy4zLDUuMiwzLjMsOC4zYy0wLjEsMy4xLTEuMiw2LjEtMy4zLDguM2MtMi4xLTIuMy0zLjMtNS4yLTMuMy04'+
			'LjNDNi43LDYuOSw3LjksMy45LDEwLDEuN3oiLz4KPC9zdmc+Cg==';
		me._ht_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url_bg.appendChild(me._ht_url_icon);
		me._ht_url.appendChild(me._ht_url_bg);
		el=me._ht_url_custom_image=document.createElement('div');
		els=me._ht_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_url_custom_image.ggAltText));
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_url_custom_image.ggText_untranslated = img;
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_url_custom_image.ggSubElement.src='';
			me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_url_custom_image.ggText != player._(me._ht_url_custom_image.ggText_untranslated)) {
				me._ht_url_custom_image.ggText = player._(me._ht_url_custom_image.ggText_untranslated);
				me._ht_url_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_custom_image.style.transition='';
				if (me._ht_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_custom_image.style.visibility=(Number(me._ht_url_custom_image.style.opacity)>0||!me._ht_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
					me._ht_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_url_custom_image.style.visibility="hidden";
					me._ht_url_custom_image.ggSubElement.src='';
					me._ht_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_url_custom_image.logicBlock_visible();
		me._ht_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_url_custom_image.clientWidth;
			var parentHeight = me._ht_url_custom_image.clientHeight;
			var img = me._ht_url_custom_image__img;
			var aspectRatioDiv = me._ht_url_custom_image.clientWidth / me._ht_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentWidth < me._ht_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentHeight < me._ht_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_url_custom_image.scrollTop=currentHeight / 2 - me._ht_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_url.appendChild(me._ht_url_custom_image);
		me._ht_url.logicBlock_visible();
		me.elementMouseOver['ht_url']=false;
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_url_bg']=false;
		me._ht_url_title.logicBlock_position();
		me._ht_url_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_url_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_url_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_title.logicBlock_position();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_url_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_url.logicBlock_visible();
			};
			me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 82px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style.transition='';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
				else {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
			}
		}
		me._ht_node.logicBlock_visible();
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_bg=document.createElement('div');
		el.ggId="ht_node_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_bg.style.transition='transform 300ms ease 0ms, background-color 300ms ease 0ms';
				if (me._ht_node_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_node_bg.ggParameter.sx = 2.5;
					me._ht_node_bg.ggParameter.sy = 2.5;
					me._ht_node_bg.style.transform=parameterToTransform(me._ht_node_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_bg);}, 350);
				}
				else {
					me._ht_node_bg.ggParameter.sx = 1;
					me._ht_node_bg.ggParameter.sy = 1;
					me._ht_node_bg.style.transform=parameterToTransform(me._ht_node_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_bg);}, 350);
				}
			}
		}
		me._ht_node_bg.logicBlock_scaling();
		me._ht_node_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_bg.style.transition='transform 300ms ease 0ms, background-color 300ms ease 0ms';
				if (me._ht_node_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_node_bg.style.visibility="hidden";
					me._ht_node_bg.ggVisible=false;
				}
				else {
					me._ht_node_bg.style.visibility=(Number(me._ht_node_bg.style.opacity)>0||!me._ht_node_bg.style.opacity)?'inherit':'hidden';
					me._ht_node_bg.ggVisible=true;
				}
			}
		}
		me._ht_node_bg.logicBlock_visible();
		me._ht_node_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_node_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_node_bg.style.transition='transform 300ms ease 0ms, background-color 300ms ease 0ms';
				if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_node_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._ht_node_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._ht_node_bg.logicBlock_backgroundcolor();
		me._ht_node_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_node_bg']=true;
			me._ht_node_title.logicBlock_alpha();
			me._ht_node_thumb.logicBlock_alpha();
			me._ht_node_bg.logicBlock_scaling();
			me._ht_node_bg.logicBlock_backgroundcolor();
		}
		me._ht_node_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_bg']=false;
			me._ht_node_title.logicBlock_alpha();
			me._ht_node_thumb.logicBlock_alpha();
			me._ht_node_bg.logicBlock_scaling();
			me._ht_node_bg.logicBlock_backgroundcolor();
		}
		me._ht_node_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_icon_visited=document.createElement('div');
		els=me._ht_node_icon_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyMCAyMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZT0iI2'+
			'MyZTgxMiIgZD0iTTE3LjQsNi4xJiN4YTsmI3g5O2MwLjYsMS4yLDAuOSwyLjUsMC45LDMuOWMwLDQuNi0zLjcsOC4zLTguMyw4LjNTMS43LDE0LjYsMS43LDEwUzUuNCwxLjcsMTAsMS43YzEuNSwwLDIuOSwwLjQsNC4xLDEuMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiA8cGF0aCBzdHJva2U9IiNjMmU4MTIiIGQ9Ik0xNC44LDguNiYjeGE7JiN4OTtDMTQuOSw5LjEsMTUsOS41LDE1LDEwYzAsMi44LTIuMiw1LTUsNXMtNS0yLjItNS01czIuMi01LDUtNSIg'+
			'c3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiA8Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9IiNjMmU4MTIiIHI9IjEuNyIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBjeD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgY3k9IjEwIi8+CiA8cG9seWxpbmUgc3Ryb2tlPSIjYzJlODEyIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bm'+
			'QiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBvaW50cz0iMTguMiwyLjEgJiN4YTsmI3g5OzEzLjYsNi43IDEyLjEsNS4yICIvPgo8L3N2Zz4K';
		me._ht_node_icon_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_icon_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_icon_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_icon_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_icon_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_icon_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_icon_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_icon_visited.style.transition='';
				if (me._ht_node_icon_visited.ggCurrentLogicStateVisible == 0) {
					me._ht_node_icon_visited.style.visibility=(Number(me._ht_node_icon_visited.style.opacity)>0||!me._ht_node_icon_visited.style.opacity)?'inherit':'hidden';
					me._ht_node_icon_visited.ggVisible=true;
				}
				else {
					me._ht_node_icon_visited.style.visibility="hidden";
					me._ht_node_icon_visited.ggVisible=false;
				}
			}
		}
		me._ht_node_icon_visited.logicBlock_visible();
		me._ht_node_icon_visited.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_icon_visited);
		el=me._ht_node_icon=document.createElement('div');
		els=me._ht_node_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyMCAyMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAyMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNjMmU4MTI7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxjaXJjbGUgY2xhc3M9InN0MCIgcj0iOC4zIiBjeD0iMTAiIGN5PSIxMCIvPgogPGNpcmNsZSBjbGFzcz0ic3QwIiByPSI1IiBjeD0iMTAiIGN5PSIxMCIvPgogPGNpcmNsZSBjbGFzcz0ic3QwIiByPSIxLjciIGN4PSIxMCIgY3k9IjEwIi8+Cjwvc3ZnPgo=';
		me._ht_node_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_icon.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_icon.style.transition='';
				if (me._ht_node_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_node_icon.style.visibility="hidden";
					me._ht_node_icon.ggVisible=false;
				}
				else {
					me._ht_node_icon.style.visibility=(Number(me._ht_node_icon.style.opacity)>0||!me._ht_node_icon.style.opacity)?'inherit':'hidden';
					me._ht_node_icon.ggVisible=true;
				}
			}
		}
		me._ht_node_icon.logicBlock_visible();
		me._ht_node_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_icon);
		el=me._ht_node_title=document.createElement('div');
		els=me._ht_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_node_title";
		el.ggDx=0;
		el.ggDy=28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.33,sy:0.33,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 28px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 21px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_node_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_node_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_node_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_node_title.ggCurrentLogicStatePosition == 0) {
					me._ht_node_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_node_title.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -28px)';
				}
				else {
					me._ht_node_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_node_title.style.top='calc(50% - ((0px + 0px) / 2) + 28px)';
				}
			}
		}
		me._ht_node_title.logicBlock_position();
		me._ht_node_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_node_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_title.style.visibility=me._ht_node_title.ggVisible?'inherit':'hidden';
					me._ht_node_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_title.style.opacity == 0.0) { me._ht_node_title.style.visibility="hidden"; } }, 305);
					me._ht_node_title.style.opacity=0;
				}
			}
		}
		me._ht_node_title.logicBlock_alpha();
		me._ht_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_title);
		el=me._ht_node_thumb=document.createElement('div');
		els=me._ht_node_thumb__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_node_thumb_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 41px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_thumb";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.32,sy:0.32,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._ht_node_thumb.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_node_thumb.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_thumb.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_thumb.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_thumb.style.transition='opacity 300ms ease 0ms';
				if (me._ht_node_thumb.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_thumb.style.visibility=me._ht_node_thumb.ggVisible?'inherit':'hidden';
					me._ht_node_thumb.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_thumb.style.opacity == 0.0) { me._ht_node_thumb.style.visibility="hidden"; } }, 305);
					me._ht_node_thumb.style.opacity=0;
				}
			}
		}
		me._ht_node_thumb.logicBlock_alpha();
		me._ht_node_thumb.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_thumb);
		me._ht_node.appendChild(me._ht_node_bg);
		el=me._ht_node_custom_image=document.createElement('div');
		els=me._ht_node_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image.ggAltText));
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image.ggText_untranslated = img;
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image.ggSubElement.style.width = '0px';
			me._ht_node_custom_image.ggSubElement.style.height = '0px';
			me._ht_node_custom_image.ggSubElement.src='';
			me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image.ggText != player._(me._ht_node_custom_image.ggText_untranslated)) {
				me._ht_node_custom_image.ggText = player._(me._ht_node_custom_image.ggText_untranslated);
				me._ht_node_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image.style.transition='';
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image.style.visibility=(Number(me._ht_node_custom_image.style.opacity)>0||!me._ht_node_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
					me._ht_node_custom_image.ggVisible=true;
				}
				else {
					me._ht_node_custom_image.style.visibility="hidden";
					me._ht_node_custom_image.ggSubElement.src='';
					me._ht_node_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image.logicBlock_visible();
		me._ht_node_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.clientWidth;
			var parentHeight = me._ht_node_custom_image.clientHeight;
			var img = me._ht_node_custom_image__img;
			var aspectRatioDiv = me._ht_node_custom_image.clientWidth / me._ht_node_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentWidth < me._ht_node_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image.scrollLeft=currentWidth / 2 - me._ht_node_custom_image.clientWidth / 2;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentHeight < me._ht_node_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image.scrollTop=currentHeight / 2 - me._ht_node_custom_image.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_custom_image);
		me._ht_node.logicBlock_visible();
		me.elementMouseOver['ht_node']=false;
		me._ht_node_bg.logicBlock_scaling();
		me._ht_node_bg.logicBlock_visible();
		me._ht_node_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_node_bg']=false;
		me._ht_node_icon_visited.logicBlock_visible();
		me._ht_node_icon.logicBlock_visible();
		me._ht_node_title.logicBlock_position();
		me._ht_node_title.logicBlock_alpha();
		me._ht_node_thumb.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_icon_visited.logicBlock_visible();
				me._ht_node_icon.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_icon_visited.logicBlock_visible();
				me._ht_node_icon.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_title.logicBlock_position();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_node_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 322px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style.transition='';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
				else {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
			}
		}
		me._ht_image.logicBlock_visible();
		me._ht_image.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_bg=document.createElement('div');
		el.ggId="ht_image_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_bg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_image_bg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_image_bg.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_image_bg.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms, background-color 100ms ease 0ms';
				if (me._ht_image_bg.ggCurrentLogicStateSize == 0) {
					me._ht_image_bg.style.width='350px';
					me._ht_image_bg.style.height='300px';
					me._ht_image_bg.style.left = 'calc(50% - (350px / 2))';
					me._ht_image_bg.style.top = 'calc(50% - (300px / 2))';
					setTimeout(function() {skin.updateSize(me._ht_image_bg);}, 550);
				}
				else {
					me._ht_image_bg.style.width='40px';
					me._ht_image_bg.style.height='40px';
					me._ht_image_bg.style.left = 'calc(50% - (40px / 2))';
					me._ht_image_bg.style.top = 'calc(50% - (40px / 2))';
					setTimeout(function() {skin.updateSize(me._ht_image_bg);}, 550);
				}
			}
		}
		me._ht_image_bg.logicBlock_size();
		me._ht_image_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_image_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_image_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_image_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_image_bg.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms, background-color 100ms ease 0ms';
				if (me._ht_image_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_image_bg.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._ht_image_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._ht_image_bg.logicBlock_backgroundcolor();
		me._ht_image_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_image_bg']=true;
			me._ht_image_title.logicBlock_alpha();
			me._ht_image_bg.logicBlock_backgroundcolor();
		}
		me._ht_image_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_image_bg']=false;
			me._ht_image_title.logicBlock_alpha();
			me._ht_image_bg.logicBlock_backgroundcolor();
		}
		me._ht_image_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_thumbnail=document.createElement('div');
		els=me._ht_image_thumbnail__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_image_thumbnail.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_image_thumbnail.ggSubElement.setAttribute('alt', player._(me._ht_image_thumbnail.ggAltText));
			me._ht_image_thumbnail.ggUpdateImagePlaceholder();
		}
		el.ggSetImage = function(img) {
			me._ht_image_thumbnail.ggText_untranslated = img;
			me._ht_image_thumbnail.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_image_thumbnail.ggSubElement.style.width = '0px';
			me._ht_image_thumbnail.ggSubElement.style.height = '0px';
			me._ht_image_thumbnail.ggSubElement.src='';
			me._ht_image_thumbnail.ggSubElement.src=me._ht_image_thumbnail.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_image_thumbnail.ggText != player._(me._ht_image_thumbnail.ggText_untranslated)) {
				me._ht_image_thumbnail.ggText = player._(me._ht_image_thumbnail.ggText_untranslated);
				me._ht_image_thumbnail.ggUpdateImage()
			}
		}
		player.addListener('changenode', function() {
			me._ht_image_thumbnail.ggUpdateImagePlaceholder();
		});
		el.ggUpdateImagePlaceholder = function() {
			if (me._ht_image_thumbnail.ggText != ""+player.getBasePath()+""+player._(me.hotspot.url)+"") {
				me._ht_image_thumbnail.ggText=""+player.getBasePath()+""+player._(me.hotspot.url)+"";
				me._ht_image_thumbnail.ggUpdateImage()
			}
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_image_thumbnail";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : calc(100% - 40px);';
		hs+='left : calc(50% - ((calc(100% - 100px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 40px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_thumbnail.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_thumbnail.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('vis_image_popup') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_thumbnail.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_thumbnail.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_thumbnail.style.transition='';
				if (me._ht_image_thumbnail.ggCurrentLogicStateVisible == 0) {
					me._ht_image_thumbnail.style.visibility=(Number(me._ht_image_thumbnail.style.opacity)>0||!me._ht_image_thumbnail.style.opacity)?'inherit':'hidden';
					me._ht_image_thumbnail.ggSubElement.src=me._ht_image_thumbnail.ggText;
					me._ht_image_thumbnail.ggVisible=true;
				}
				else {
					me._ht_image_thumbnail.style.visibility="hidden";
					me._ht_image_thumbnail.ggSubElement.src='';
					me._ht_image_thumbnail.ggVisible=false;
				}
			}
		}
		me._ht_image_thumbnail.logicBlock_visible();
		me._ht_image_thumbnail.onclick=function (e) {
			skin._ht_image_popup_fs_image.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			player.setVariableValue('open_image_hotspots', player.getVariableValue('open_image_hotspots').replace("<"+me.hotspot.id+">", ''));
			player.setVariableValue('vis_image_popup', true);
				skin._ht_image_popup_fs_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._ht_image_popup_fs_title.ggUpdateText();
			skin._ht_image_popup_fs_title.ggTextDiv.scrollTop = 0;
			me._ht_image.style.zIndex='-1';
me._ht_image_bg.style.transform= '';
		}
		me._ht_image_thumbnail.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_image_thumbnail.clientWidth;
			var parentHeight = me._ht_image_thumbnail.clientHeight;
			var img = me._ht_image_thumbnail__img;
			var aspectRatioDiv = me._ht_image_thumbnail.clientWidth / me._ht_image_thumbnail.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._ht_image_thumbnail.ggScrollbars || currentWidth < me._ht_image_thumbnail.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_image_thumbnail.scrollLeft=currentWidth / 2 - me._ht_image_thumbnail.clientWidth / 2;
			}
			if (!me._ht_image_thumbnail.ggScrollbars || currentHeight < me._ht_image_thumbnail.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_image_thumbnail.scrollTop=currentHeight / 2 - me._ht_image_thumbnail.clientHeight / 2;
			}
		}
		me._ht_image_bg.appendChild(me._ht_image_thumbnail);
		el=me._ht_image_title=document.createElement('div');
		els=me._ht_image_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_title";
		el.ggDx=0;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 34px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_image_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_image_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_image_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_image_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_image_title.ggCurrentLogicStatePosition == 0) {
					me._ht_image_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_image_title.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -34px)';
				}
				else {
					me._ht_image_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_image_title.style.top='calc(50% - ((0px + 0px) / 2) + 34px)';
				}
			}
		}
		me._ht_image_title.logicBlock_position();
		me._ht_image_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_image_bg'] == true)) && 
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_image_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_title.style.visibility=me._ht_image_title.ggVisible?'inherit':'hidden';
					me._ht_image_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_title.style.opacity == 0.0) { me._ht_image_title.style.visibility="hidden"; } }, 305);
					me._ht_image_title.style.opacity=0;
				}
			}
		}
		me._ht_image_title.logicBlock_alpha();
		me._ht_image_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg.appendChild(me._ht_image_title);
		el=me._ht_image_toggle_container=document.createElement('div');
		el.ggId="ht_image_toggle_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_toggle_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_toggle_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_image_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_image_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_image_icon_container.style.opacity == 0.0) { me._ht_image_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_image_icon_container.style.opacity=0;
				}
				else {
					me._ht_image_icon_container.style.visibility=me._ht_image_icon_container.ggVisible?'inherit':'hidden';
					me._ht_image_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_image_icon_container.logicBlock_alpha();
		me._ht_image_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_image_hotspots', player.getVariableValue('open_image_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_image_thumbnail.style.transition='none';
				} else {
					me._ht_image_thumbnail.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_image_thumbnail.style.opacity='1';
				me._ht_image_thumbnail.style.visibility=me._ht_image_thumbnail.ggVisible?'inherit':'hidden';
				me._ht_image_thumbnail.ggSubElement.src=me._ht_image_thumbnail.ggText;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image.style.zIndex='0';
me._ht_image_bg.style.transform= 'translateZ(10px)';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._image_popup_phone.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			}
		}
		me._ht_image_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_icon=document.createElement('div');
		els=me._ht_image_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyMCAyMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAyMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNjMmU4MTI7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xOS4yLDE1LjhjMCwwLjktMC43LDEuNy0xLjcsMS43aC0xNWMtMC45LDAtMS43LTAuNy0xLjctMS43VjYuN0MwLjgsNS43LDEuNiw1LDIuNSw1aDMuM2wxLjctMi41aDVMMTQuMiw1JiN4YTsmI3g5O2gzLjNjMC45LDAsMS43LDAuNywxLjcsMS43VjE1Ljh6Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIHI9IjMuMyIgY3g9'+
			'IjEwIiBjeT0iMTAuOCIvPgo8L3N2Zz4K';
		me._ht_image_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_icon_container.appendChild(me._ht_image_icon);
		me._ht_image_toggle_container.appendChild(me._ht_image_icon_container);
		el=me._ht_image_close=document.createElement('div');
		els=me._ht_image_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHdpZHRoPSIyMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjYzJlODEyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjIwIj4KIDxsaW5lIHgyPSI2IiB5Mj0iMTgiIHkxPSI2IiB4MT0iMTgiLz4KIDxsaW5lIHgyPSIxOCIgeTI9IjE4IiB5MT0iNiIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._ht_image_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_image_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_close.style.visibility=me._ht_image_close.ggVisible?'inherit':'hidden';
					me._ht_image_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_close.style.opacity == 0.0) { me._ht_image_close.style.visibility="hidden"; } }, 305);
					me._ht_image_close.style.opacity=0;
				}
			}
		}
		me._ht_image_close.logicBlock_alpha();
		me._ht_image_close.onclick=function (e) {
			player.setVariableValue('open_image_hotspots', player.getVariableValue('open_image_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_image_thumbnail.style.transition='none';
			} else {
				me._ht_image_thumbnail.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_image_thumbnail.style.opacity='0';
			me._ht_image_thumbnail.style.visibility='hidden';
			me._ht_image_thumbnail.ggSubElement.src='';
			me._ht_image.style.zIndex='-1';
me._ht_image_bg.style.transform= '';
		}
		me._ht_image_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_toggle_container.appendChild(me._ht_image_close);
		me._ht_image_bg.appendChild(me._ht_image_toggle_container);
		me._ht_image.appendChild(me._ht_image_bg);
		me._ht_image.logicBlock_visible();
		me.elementMouseOver['ht_image']=false;
		me._ht_image_bg.logicBlock_size();
		me._ht_image_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_image_bg']=false;
		me._ht_image_thumbnail.logicBlock_visible();
		me._ht_image_title.logicBlock_position();
		me._ht_image_title.logicBlock_alpha();
		me._ht_image_icon_container.logicBlock_alpha();
		me._ht_image_close.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image_bg.logicBlock_size();
				me._ht_image_thumbnail.logicBlock_visible();
				me._ht_image_title.logicBlock_alpha();
				me._ht_image_icon_container.logicBlock_alpha();
				player.setVariableValue('open_image_hotspots', "");
				me._ht_image_close.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image_bg.logicBlock_size();
				me._ht_image_thumbnail.logicBlock_visible();
				me._ht_image_title.logicBlock_position();
				me._ht_image_title.logicBlock_alpha();
				me._ht_image_icon_container.logicBlock_alpha();
				me._ht_image_close.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._ht_image_title.logicBlock_position();
			};
			me.ggEvent_varchanged_open_image_hotspots=function() {
				me._ht_image_bg.logicBlock_size();
				me._ht_image_title.logicBlock_alpha();
				me._ht_image_icon_container.logicBlock_alpha();
				me._ht_image_close.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_image_popup=function() {
				me._ht_image_thumbnail.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image_thumbnail.logicBlock_visible();
			};
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 202px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style.transition='';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
				else {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
			}
		}
		me._ht_info.logicBlock_visible();
		me._ht_info.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_bg=document.createElement('div');
		el.ggId="ht_info_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_bg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_info_bg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_info_bg.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_info_bg.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms, background-color 100ms ease 0ms';
				if (me._ht_info_bg.ggCurrentLogicStateSize == 0) {
					me._ht_info_bg.style.width='350px';
					me._ht_info_bg.style.height='350px';
					me._ht_info_bg.style.left = 'calc(50% - (350px / 2))';
					me._ht_info_bg.style.top = 'calc(50% - (350px / 2))';
					setTimeout(function() {skin.updateSize(me._ht_info_bg);}, 550);
				}
				else {
					me._ht_info_bg.style.width='40px';
					me._ht_info_bg.style.height='40px';
					me._ht_info_bg.style.left = 'calc(50% - (40px / 2))';
					me._ht_info_bg.style.top = 'calc(50% - (40px / 2))';
					setTimeout(function() {skin.updateSize(me._ht_info_bg);}, 550);
				}
			}
		}
		me._ht_info_bg.logicBlock_size();
		me._ht_info_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_info_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_info_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_info_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_info_bg.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, left 500ms ease 0ms, top 500ms ease 0ms, background-color 100ms ease 0ms';
				if (me._ht_info_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_info_bg.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._ht_info_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._ht_info_bg.logicBlock_backgroundcolor();
		me._ht_info_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_info_bg']=true;
			me._ht_info_title.logicBlock_alpha();
			me._ht_info_bg.logicBlock_backgroundcolor();
		}
		me._ht_info_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_info_bg']=false;
			me._ht_info_title.logicBlock_alpha();
			me._ht_info_bg.logicBlock_backgroundcolor();
		}
		me._ht_info_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_text=document.createElement('div');
		el.ggId="ht_info_text";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 31px);';
		hs+='left : calc(50% - ((calc(100% - 40px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_text.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_text.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_text.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_text.style.transition='';
				if (me._ht_info_text.ggCurrentLogicStateVisible == 0) {
					me._ht_info_text.style.visibility=(Number(me._ht_info_text.style.opacity)>0||!me._ht_info_text.style.opacity)?'inherit':'hidden';
					me._ht_info_text.ggVisible=true;
				}
				else {
					me._ht_info_text.style.visibility="hidden";
					me._ht_info_text.ggVisible=false;
				}
			}
		}
		me._ht_info_text.logicBlock_visible();
		me._ht_info_text.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_text_body=document.createElement('div');
		els=me._ht_info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_text_body";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text karla";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 35px);';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 5px 0px 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._ht_info_text_body.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_text_body.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_text.appendChild(me._ht_info_text_body);
		el=me._ht_info_text_headline=document.createElement('div');
		els=me._ht_info_text_headline__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_text_headline";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((calc(100% - 60px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 60px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_info_text_headline.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_text_headline.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_text_headline.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_text_headline.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_text_headline.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_text.appendChild(me._ht_info_text_headline);
		me._ht_info_bg.appendChild(me._ht_info_text);
		el=me._ht_info_title=document.createElement('div');
		els=me._ht_info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_title";
		el.ggDx=0;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 34px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_info_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_info_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_info_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_info_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_info_title.ggCurrentLogicStatePosition == 0) {
					me._ht_info_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_info_title.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -34px)';
				}
				else {
					me._ht_info_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_info_title.style.top='calc(50% - ((0px + 0px) / 2) + 34px)';
				}
			}
		}
		me._ht_info_title.logicBlock_position();
		me._ht_info_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_info_bg'] == true)) && 
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_info_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_title.style.visibility=me._ht_info_title.ggVisible?'inherit':'hidden';
					me._ht_info_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_title.style.opacity == 0.0) { me._ht_info_title.style.visibility="hidden"; } }, 305);
					me._ht_info_title.style.opacity=0;
				}
			}
		}
		me._ht_info_title.logicBlock_alpha();
		me._ht_info_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_bg.appendChild(me._ht_info_title);
		el=me._ht_info_toggle_container=document.createElement('div');
		el.ggId="ht_info_toggle_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_toggle_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_toggle_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_icon_container=document.createElement('div');
		el.ggId="ht_info_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_info_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_info_icon_container.style.opacity == 0.0) { me._ht_info_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_info_icon_container.style.opacity=0;
				}
				else {
					me._ht_info_icon_container.style.visibility=me._ht_info_icon_container.ggVisible?'inherit':'hidden';
					me._ht_info_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_info_icon_container.logicBlock_alpha();
		me._ht_info_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_info_hotspots', player.getVariableValue('open_info_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_info_text.style.transition='none';
				} else {
					me._ht_info_text.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_info_text.style.opacity='1';
				me._ht_info_text.style.visibility=me._ht_info_text.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_info.style.zIndex='0';
me._ht_info_bg.style.transform='translateZ(10px)';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_title_phone.ggUpdateText();
				skin._info_popup_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_text_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_text_phone.ggUpdateText();
				skin._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			}
		}
		me._ht_info_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_icon=document.createElement('div');
		els=me._ht_info_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyMCAyMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZT0iI2'+
			'MyZTgxMiIgZD0iTTE3LjUsMTIuNSYjeGE7JiN4OTtjMCwwLjktMC43LDEuNy0xLjcsMS43aC0xMGwtMy4zLDMuM1Y0LjJjMC0wLjksMC43LTEuNywxLjctMS43aDExLjdjMC45LDAsMS43LDAuNywxLjcsMS43VjEyLjV6IiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==';
		me._ht_info_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_icon_container.appendChild(me._ht_info_icon);
		me._ht_info_toggle_container.appendChild(me._ht_info_icon_container);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHdpZHRoPSIyMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjYzJlODEyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjIwIj4KIDxsaW5lIHgyPSI2IiB5Mj0iMTgiIHkxPSI2IiB4MT0iMTgiLz4KIDxsaW5lIHgyPSIxOCIgeTI9IjE4IiB5MT0iNiIgeDE9IjYiLz4KPC9zdmc+Cg==';
		me._ht_info_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_info_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_close.style.visibility=me._ht_info_close.ggVisible?'inherit':'hidden';
					me._ht_info_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_close.style.opacity == 0.0) { me._ht_info_close.style.visibility="hidden"; } }, 305);
					me._ht_info_close.style.opacity=0;
				}
			}
		}
		me._ht_info_close.logicBlock_alpha();
		me._ht_info_close.onclick=function (e) {
			player.setVariableValue('open_info_hotspots', player.getVariableValue('open_info_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_info_text.style.transition='none';
			} else {
				me._ht_info_text.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_info_text.style.opacity='0';
			me._ht_info_text.style.visibility='hidden';
			me._ht_info.style.zIndex='-1';
me._ht_info_bg.style.transform='';
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_toggle_container.appendChild(me._ht_info_close);
		me._ht_info_bg.appendChild(me._ht_info_toggle_container);
		me._ht_info.appendChild(me._ht_info_bg);
		me._ht_info.logicBlock_visible();
		me.elementMouseOver['ht_info']=false;
		me._ht_info_bg.logicBlock_size();
		me._ht_info_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_info_bg']=false;
		me._ht_info_text.logicBlock_visible();
		me._ht_info_title.logicBlock_position();
		me._ht_info_title.logicBlock_alpha();
		me._ht_info_icon_container.logicBlock_alpha();
		me._ht_info_close.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info_bg.logicBlock_size();
				me._ht_info_text.logicBlock_visible();
				me._ht_info_title.logicBlock_alpha();
				me._ht_info_icon_container.logicBlock_alpha();
				player.setVariableValue('open_info_hotspots', "");
				me._ht_info_close.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info_bg.logicBlock_size();
				me._ht_info_text.logicBlock_visible();
				me._ht_info_title.logicBlock_position();
				me._ht_info_title.logicBlock_alpha();
				me._ht_info_icon_container.logicBlock_alpha();
				me._ht_info_close.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._ht_info_title.logicBlock_position();
			};
			me.ggEvent_varchanged_open_info_hotspots=function() {
				me._ht_info_bg.logicBlock_size();
				me._ht_info_title.logicBlock_alpha();
				me._ht_info_icon_container.logicBlock_alpha();
				me._ht_info_close.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info_text.logicBlock_visible();
			};
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_pdf(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_pdf=document.createElement('div');
		el.ggId="ht_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 262px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_pdf.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf.style.transition='';
				if (me._ht_pdf.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf.style.visibility=(Number(me._ht_pdf.style.opacity)>0||!me._ht_pdf.style.opacity)?'inherit':'hidden';
					me._ht_pdf.ggVisible=true;
				}
				else {
					me._ht_pdf.style.visibility="hidden";
					me._ht_pdf.ggVisible=false;
				}
			}
		}
		me._ht_pdf.logicBlock_visible();
		me._ht_pdf.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._ht_pdf_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._ht_pdf_popup_title.ggUpdateText();
				skin._ht_pdf_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._ht_pdf_popup_pdf.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				let pdfInterval_3 = setInterval(() => {
					if (skin._ht_pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication && skin._ht_pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.initialized && skin._ht_pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._ht_pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._ht_pdf_popup_pdf.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_3);
					}
				}, 50);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._pdf_popup_phone.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				let pdfInterval_4 = setInterval(() => {
					if (skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_popup_phone.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_4);
					}
				}, 50);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_pdf']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_pdf']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_bg=document.createElement('div');
		el.ggId="ht_pdf_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_bg.style.transition='background-color 100ms ease 0ms';
				if (me._ht_pdf_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_bg.style.visibility="hidden";
					me._ht_pdf_bg.ggVisible=false;
				}
				else {
					me._ht_pdf_bg.style.visibility=(Number(me._ht_pdf_bg.style.opacity)>0||!me._ht_pdf_bg.style.opacity)?'inherit':'hidden';
					me._ht_pdf_bg.ggVisible=true;
				}
			}
		}
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_pdf_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_pdf_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_pdf_bg.style.transition='background-color 100ms ease 0ms';
				if (me._ht_pdf_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_pdf_bg.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._ht_pdf_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._ht_pdf_bg.logicBlock_backgroundcolor();
		me._ht_pdf_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_pdf_bg']=true;
			me._ht_pdf_title.logicBlock_alpha();
			me._ht_pdf_bg.logicBlock_backgroundcolor();
		}
		me._ht_pdf_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_pdf_bg']=false;
			me._ht_pdf_title.logicBlock_alpha();
			me._ht_pdf_bg.logicBlock_backgroundcolor();
		}
		me._ht_pdf_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_title=document.createElement('div');
		els=me._ht_pdf_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_pdf_title";
		el.ggDx=0;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 34px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_pdf_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_pdf_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_pdf_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_pdf_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_pdf_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_pdf_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_pdf_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_pdf_title.ggCurrentLogicStatePosition == 0) {
					me._ht_pdf_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_pdf_title.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -34px)';
				}
				else {
					me._ht_pdf_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_pdf_title.style.top='calc(50% - ((0px + 0px) / 2) + 34px)';
				}
			}
		}
		me._ht_pdf_title.logicBlock_position();
		me._ht_pdf_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_pdf_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_pdf_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_pdf_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_pdf_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_pdf_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_pdf_title.style.visibility=me._ht_pdf_title.ggVisible?'inherit':'hidden';
					me._ht_pdf_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_pdf_title.style.opacity == 0.0) { me._ht_pdf_title.style.visibility="hidden"; } }, 305);
					me._ht_pdf_title.style.opacity=0;
				}
			}
		}
		me._ht_pdf_title.logicBlock_alpha();
		me._ht_pdf_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_bg.appendChild(me._ht_pdf_title);
		el=me._ht_pdf_icon=document.createElement('div');
		els=me._ht_pdf_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyMCAyMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAyMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNjMmU4MTI7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMS43LDEuN0g1Yy0wLjksMC0xLjcsMC43LTEuNywxLjd2MTMuM2MwLDAuOSwwLjcsMS43LDEuNywxLjdoMTBjMC45LDAsMS43LTAuNywxLjctMS43di0xMEwxMS43LDEuN3oiLz4KIDxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjExLjcsMS43IDExLjcsNi43IDE2LjcsNi43ICIvPgogPGxpbmUgY2xhc3M9InN0'+
			'MCIgeDI9IjYuNyIgeTI9IjEwLjgiIHkxPSIxMC44IiB4MT0iMTMuMyIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDI9IjYuNyIgeTI9IjE0LjIiIHkxPSIxNC4yIiB4MT0iMTMuMyIvPgogPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iOC4zLDcuNSA3LjUsNy41IDYuNyw3LjUgIi8+Cjwvc3ZnPgo=';
		me._ht_pdf_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_pdf_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_bg.appendChild(me._ht_pdf_icon);
		me._ht_pdf.appendChild(me._ht_pdf_bg);
		el=me._ht_pdf_custom_image=document.createElement('div');
		els=me._ht_pdf_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_pdf_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_pdf_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_pdf_custom_image.ggAltText));
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_pdf_custom_image.ggText_untranslated = img;
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_pdf_custom_image.ggSubElement.style.width = '0px';
			me._ht_pdf_custom_image.ggSubElement.style.height = '0px';
			me._ht_pdf_custom_image.ggSubElement.src='';
			me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_pdf_custom_image.ggText != player._(me._ht_pdf_custom_image.ggText_untranslated)) {
				me._ht_pdf_custom_image.ggText = player._(me._ht_pdf_custom_image.ggText_untranslated);
				me._ht_pdf_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_pdf_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_custom_image.style.transition='';
				if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_custom_image.style.visibility=(Number(me._ht_pdf_custom_image.style.opacity)>0||!me._ht_pdf_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
					me._ht_pdf_custom_image.ggVisible=true;
				}
				else {
					me._ht_pdf_custom_image.style.visibility="hidden";
					me._ht_pdf_custom_image.ggSubElement.src='';
					me._ht_pdf_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_pdf_custom_image.logicBlock_visible();
		me._ht_pdf_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_pdf_custom_image.clientWidth;
			var parentHeight = me._ht_pdf_custom_image.clientHeight;
			var img = me._ht_pdf_custom_image__img;
			var aspectRatioDiv = me._ht_pdf_custom_image.clientWidth / me._ht_pdf_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentWidth < me._ht_pdf_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_pdf_custom_image.scrollLeft=currentWidth / 2 - me._ht_pdf_custom_image.clientWidth / 2;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentHeight < me._ht_pdf_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_pdf_custom_image.scrollTop=currentHeight / 2 - me._ht_pdf_custom_image.clientHeight / 2;
			}
		}
		me._ht_pdf.appendChild(me._ht_pdf_custom_image);
		me._ht_pdf.logicBlock_visible();
		me.elementMouseOver['ht_pdf']=false;
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_pdf_bg']=false;
		me._ht_pdf_title.logicBlock_position();
		me._ht_pdf_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_pdf_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_pdf_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_pdf_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_pdf_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_pdf_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_title.logicBlock_position();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_pdf_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_pdf.logicBlock_visible();
			};
			me.__div = me._ht_pdf;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 382px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file.style.transition='';
				if (me._ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file.style.visibility=(Number(me._ht_video_file.style.opacity)>0||!me._ht_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_file.ggVisible=true;
				}
				else {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
			}
		}
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_file_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._ht_video_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._ht_video_popup_title.ggUpdateText();
				skin._ht_video_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._ht_video_popup_file.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_controller_seekbar.ggMediaId = "ht_video_popup_file";
				skin._video_controller_seekbar.ggConnectToMediaEl();
				skin._video_controller_seekbar.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_file_popup_phone.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_file_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_bg=document.createElement('div');
		el.ggId="ht_video_file_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_bg.style.transition='background-color 100ms ease 0ms';
				if (me._ht_video_file_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_bg.style.visibility="hidden";
					me._ht_video_file_bg.ggVisible=false;
				}
				else {
					me._ht_video_file_bg.style.visibility=(Number(me._ht_video_file_bg.style.opacity)>0||!me._ht_video_file_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_file_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_file_bg.logicBlock_visible();
		me._ht_video_file_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_file_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_file_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_file_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_file_bg.style.transition='background-color 100ms ease 0ms';
				if (me._ht_video_file_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_file_bg.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._ht_video_file_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._ht_video_file_bg.logicBlock_backgroundcolor();
		me._ht_video_file_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_file_bg']=true;
			me._ht_video_file_title.logicBlock_alpha();
			me._ht_video_file_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_file_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_file_bg']=false;
			me._ht_video_file_title.logicBlock_alpha();
			me._ht_video_file_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_file_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_icon=document.createElement('div');
		els=me._ht_video_file_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyMCAyMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAyMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNjMmU4MTI7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTkuMyw1LjggMTMuNCwxMCAxOS4zLDE0LjIgIi8+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMi40LDQuMmg5LjJjMC45LDAsMS43LDAuNywxLjcsMS43djguM2MwLDAuOS0wLjcsMS43LTEuNywxLjdIMi40Yy0wLjksMC0xLjctMC43LTEuNy0xLjdWNS44JiN4YTsmI3g5O0MwLjcsNC45LDEuNSw0LjIsMi40'+
			'LDQuMnoiLz4KPC9zdmc+Cg==';
		me._ht_video_file_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_file_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_bg.appendChild(me._ht_video_file_icon);
		el=me._ht_video_file_title=document.createElement('div');
		els=me._ht_video_file_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_file_title";
		el.ggDx=0;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 34px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_file_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_file_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_file_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_file_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_file_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_file_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_file_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_video_file_title.ggCurrentLogicStatePosition == 0) {
					me._ht_video_file_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_file_title.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -34px)';
				}
				else {
					me._ht_video_file_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_file_title.style.top='calc(50% - ((0px + 0px) / 2) + 34px)';
				}
			}
		}
		me._ht_video_file_title.logicBlock_position();
		me._ht_video_file_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_file_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_video_file_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file_title.style.visibility=me._ht_video_file_title.ggVisible?'inherit':'hidden';
					me._ht_video_file_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file_title.style.opacity == 0.0) { me._ht_video_file_title.style.visibility="hidden"; } }, 305);
					me._ht_video_file_title.style.opacity=0;
				}
			}
		}
		me._ht_video_file_title.logicBlock_alpha();
		me._ht_video_file_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_bg.appendChild(me._ht_video_file_title);
		me._ht_video_file.appendChild(me._ht_video_file_bg);
		el=me._ht_video_file_custom_image=document.createElement('div');
		els=me._ht_video_file_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_file_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_file_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_file_custom_image.ggAltText));
			me._ht_video_file_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_file_custom_image.ggText_untranslated = img;
			me._ht_video_file_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_file_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_file_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_file_custom_image.ggSubElement.src='';
			me._ht_video_file_custom_image.ggSubElement.src=me._ht_video_file_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_file_custom_image.ggText != player._(me._ht_video_file_custom_image.ggText_untranslated)) {
				me._ht_video_file_custom_image.ggText = player._(me._ht_video_file_custom_image.ggText_untranslated);
				me._ht_video_file_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_file_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_custom_image.style.transition='';
				if (me._ht_video_file_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_custom_image.style.visibility=(Number(me._ht_video_file_custom_image.style.opacity)>0||!me._ht_video_file_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_file_custom_image.ggSubElement.src=me._ht_video_file_custom_image.ggText;
					me._ht_video_file_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_file_custom_image.style.visibility="hidden";
					me._ht_video_file_custom_image.ggSubElement.src='';
					me._ht_video_file_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_file_custom_image.logicBlock_visible();
		me._ht_video_file_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_file_custom_image.clientWidth;
			var parentHeight = me._ht_video_file_custom_image.clientHeight;
			var img = me._ht_video_file_custom_image__img;
			var aspectRatioDiv = me._ht_video_file_custom_image.clientWidth / me._ht_video_file_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_file_custom_image.ggScrollbars || currentWidth < me._ht_video_file_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_file_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_file_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_file_custom_image.ggScrollbars || currentHeight < me._ht_video_file_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_file_custom_image.scrollTop=currentHeight / 2 - me._ht_video_file_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_file.appendChild(me._ht_video_file_custom_image);
		me._ht_video_file.logicBlock_visible();
		me.elementMouseOver['ht_video_file']=false;
		me._ht_video_file_bg.logicBlock_visible();
		me._ht_video_file_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_video_file_bg']=false;
		me._ht_video_file_title.logicBlock_position();
		me._ht_video_file_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_file_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_file_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_file_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_file_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_file_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_title.logicBlock_position();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_file_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_video_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_url=document.createElement('div');
		el.ggId="ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 382px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url.style.transition='';
				if (me._ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url.style.visibility=(Number(me._ht_video_url.style.opacity)>0||!me._ht_video_url.style.opacity)?'inherit':'hidden';
					me._ht_video_url.ggVisible=true;
				}
				else {
					me._ht_video_url.style.visibility="hidden";
					me._ht_video_url.ggVisible=false;
				}
			}
		}
		me._ht_video_url.logicBlock_visible();
		me._ht_video_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_url_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._ht_video_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._ht_video_popup_title.ggUpdateText();
				skin._ht_video_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._ht_video_popup_url.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_controller_seekbar.ggMediaId = "ht_video_popup_url";
				skin._video_controller_seekbar.ggConnectToMediaEl();
				skin._video_controller_seekbar.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_url_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_url_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_url']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_url']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_bg=document.createElement('div');
		el.ggId="ht_video_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_bg.style.transition='background-color 100ms ease 0ms';
				if (me._ht_video_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_bg.style.visibility="hidden";
					me._ht_video_url_bg.ggVisible=false;
				}
				else {
					me._ht_video_url_bg.style.visibility=(Number(me._ht_video_url_bg.style.opacity)>0||!me._ht_video_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_url_bg.logicBlock_visible();
		me._ht_video_url_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_url_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_url_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_url_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_url_bg.style.transition='background-color 100ms ease 0ms';
				if (me._ht_video_url_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_url_bg.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._ht_video_url_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._ht_video_url_bg.logicBlock_backgroundcolor();
		me._ht_video_url_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_url_bg']=true;
			me._ht_video_url_title.logicBlock_alpha();
			me._ht_video_url_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_url_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_url_bg']=false;
			me._ht_video_url_title.logicBlock_alpha();
			me._ht_video_url_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_url_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_icon=document.createElement('div');
		els=me._ht_video_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyMCAyMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAyMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNjMmU4MTI7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTkuMyw1LjggMTMuNCwxMCAxOS4zLDE0LjIgIi8+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMi40LDQuMmg5LjJjMC45LDAsMS43LDAuNywxLjcsMS43djguM2MwLDAuOS0wLjcsMS43LTEuNywxLjdIMi40Yy0wLjksMC0xLjctMC43LTEuNy0xLjdWNS44JiN4YTsmI3g5O0MwLjcsNC45LDEuNSw0LjIsMi40'+
			'LDQuMnoiLz4KPC9zdmc+Cg==';
		me._ht_video_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_bg.appendChild(me._ht_video_url_icon);
		el=me._ht_video_url_title=document.createElement('div');
		els=me._ht_video_url_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_url_title";
		el.ggDx=0;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 34px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_url_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_url_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_url_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_url_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_url_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_url_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_url_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_video_url_title.ggCurrentLogicStatePosition == 0) {
					me._ht_video_url_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_url_title.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -34px)';
				}
				else {
					me._ht_video_url_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_url_title.style.top='calc(50% - ((0px + 0px) / 2) + 34px)';
				}
			}
		}
		me._ht_video_url_title.logicBlock_position();
		me._ht_video_url_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_url_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_video_url_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_url_title.style.visibility=me._ht_video_url_title.ggVisible?'inherit':'hidden';
					me._ht_video_url_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_url_title.style.opacity == 0.0) { me._ht_video_url_title.style.visibility="hidden"; } }, 305);
					me._ht_video_url_title.style.opacity=0;
				}
			}
		}
		me._ht_video_url_title.logicBlock_alpha();
		me._ht_video_url_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_bg.appendChild(me._ht_video_url_title);
		me._ht_video_url.appendChild(me._ht_video_url_bg);
		el=me._ht_video_url_custom_image=document.createElement('div');
		els=me._ht_video_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_url_custom_image.ggAltText));
			me._ht_video_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_url_custom_image.ggText_untranslated = img;
			me._ht_video_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_url_custom_image.ggSubElement.src='';
			me._ht_video_url_custom_image.ggSubElement.src=me._ht_video_url_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_url_custom_image.ggText != player._(me._ht_video_url_custom_image.ggText_untranslated)) {
				me._ht_video_url_custom_image.ggText = player._(me._ht_video_url_custom_image.ggText_untranslated);
				me._ht_video_url_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_custom_image.style.transition='';
				if (me._ht_video_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_custom_image.style.visibility=(Number(me._ht_video_url_custom_image.style.opacity)>0||!me._ht_video_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_url_custom_image.ggSubElement.src=me._ht_video_url_custom_image.ggText;
					me._ht_video_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_url_custom_image.style.visibility="hidden";
					me._ht_video_url_custom_image.ggSubElement.src='';
					me._ht_video_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_url_custom_image.logicBlock_visible();
		me._ht_video_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_url_custom_image.clientWidth;
			var parentHeight = me._ht_video_url_custom_image.clientHeight;
			var img = me._ht_video_url_custom_image__img;
			var aspectRatioDiv = me._ht_video_url_custom_image.clientWidth / me._ht_video_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_url_custom_image.ggScrollbars || currentWidth < me._ht_video_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_url_custom_image.ggScrollbars || currentHeight < me._ht_video_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_url_custom_image.scrollTop=currentHeight / 2 - me._ht_video_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_url.appendChild(me._ht_video_url_custom_image);
		me._ht_video_url.logicBlock_visible();
		me.elementMouseOver['ht_video_url']=false;
		me._ht_video_url_bg.logicBlock_visible();
		me._ht_video_url_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_video_url_bg']=false;
		me._ht_video_url_title.logicBlock_position();
		me._ht_video_url_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_url_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_url_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_title.logicBlock_position();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_url_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.__div = me._ht_video_url;
	};
	function SkinHotspotClass_ht_video_vimeo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_vimeo=document.createElement('div');
		el.ggId="ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 382px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo.style.transition='';
				if (me._ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo.style.visibility=(Number(me._ht_video_vimeo.style.opacity)>0||!me._ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo.ggVisible=true;
				}
				else {
					me._ht_video_vimeo.style.visibility="hidden";
					me._ht_video_vimeo.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible();
		me._ht_video_vimeo.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_vimeo_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._ht_video_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._ht_video_popup_title.ggUpdateText();
				skin._ht_video_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._ht_video_popup_vimeo.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._vimeo_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_vimeo']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_vimeo']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_bg=document.createElement('div');
		el.ggId="ht_video_vimeo_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_bg.style.transition='background-color 100ms ease 0ms';
				if (me._ht_video_vimeo_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_bg.style.visibility="hidden";
					me._ht_video_vimeo_bg.ggVisible=false;
				}
				else {
					me._ht_video_vimeo_bg.style.visibility=(Number(me._ht_video_vimeo_bg.style.opacity)>0||!me._ht_video_vimeo_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_vimeo_bg.logicBlock_visible();
		me._ht_video_vimeo_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_vimeo_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_vimeo_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_vimeo_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_vimeo_bg.style.transition='background-color 100ms ease 0ms';
				if (me._ht_video_vimeo_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_vimeo_bg.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._ht_video_vimeo_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		me._ht_video_vimeo_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_vimeo_bg']=true;
			me._ht_video_vimeo_title.logicBlock_alpha();
			me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_vimeo_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_vimeo_bg']=false;
			me._ht_video_vimeo_title.logicBlock_alpha();
			me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_vimeo_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_icon=document.createElement('div');
		els=me._ht_video_vimeo_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyMCAyMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAyMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNjMmU4MTI7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTkuMyw1LjggMTMuNCwxMCAxOS4zLDE0LjIgIi8+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMi40LDQuMmg5LjJjMC45LDAsMS43LDAuNywxLjcsMS43djguM2MwLDAuOS0wLjcsMS43LTEuNywxLjdIMi40Yy0wLjksMC0xLjctMC43LTEuNy0xLjdWNS44JiN4YTsmI3g5O0MwLjcsNC45LDEuNSw0LjIsMi40'+
			'LDQuMnoiLz4KPC9zdmc+Cg==';
		me._ht_video_vimeo_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_vimeo_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_bg.appendChild(me._ht_video_vimeo_icon);
		el=me._ht_video_vimeo_title=document.createElement('div');
		els=me._ht_video_vimeo_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_vimeo_title";
		el.ggDx=0;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 34px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_vimeo_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_vimeo_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_vimeo_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_vimeo_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_vimeo_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_vimeo_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_vimeo_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_video_vimeo_title.ggCurrentLogicStatePosition == 0) {
					me._ht_video_vimeo_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_vimeo_title.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -34px)';
				}
				else {
					me._ht_video_vimeo_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_vimeo_title.style.top='calc(50% - ((0px + 0px) / 2) + 34px)';
				}
			}
		}
		me._ht_video_vimeo_title.logicBlock_position();
		me._ht_video_vimeo_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_vimeo_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_video_vimeo_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_vimeo_title.style.visibility=me._ht_video_vimeo_title.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_vimeo_title.style.opacity == 0.0) { me._ht_video_vimeo_title.style.visibility="hidden"; } }, 305);
					me._ht_video_vimeo_title.style.opacity=0;
				}
			}
		}
		me._ht_video_vimeo_title.logicBlock_alpha();
		me._ht_video_vimeo_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_bg.appendChild(me._ht_video_vimeo_title);
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_bg);
		el=me._ht_video_vimeo_custom_image=document.createElement('div');
		els=me._ht_video_vimeo_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_vimeo_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_vimeo_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_vimeo_custom_image.ggAltText));
			me._ht_video_vimeo_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_vimeo_custom_image.ggText_untranslated = img;
			me._ht_video_vimeo_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_vimeo_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_vimeo_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_vimeo_custom_image.ggSubElement.src='';
			me._ht_video_vimeo_custom_image.ggSubElement.src=me._ht_video_vimeo_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_vimeo_custom_image.ggText != player._(me._ht_video_vimeo_custom_image.ggText_untranslated)) {
				me._ht_video_vimeo_custom_image.ggText = player._(me._ht_video_vimeo_custom_image.ggText_untranslated);
				me._ht_video_vimeo_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_vimeo_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_custom_image.style.transition='';
				if (me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_custom_image.style.visibility=(Number(me._ht_video_vimeo_custom_image.style.opacity)>0||!me._ht_video_vimeo_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_custom_image.ggSubElement.src=me._ht_video_vimeo_custom_image.ggText;
					me._ht_video_vimeo_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_vimeo_custom_image.style.visibility="hidden";
					me._ht_video_vimeo_custom_image.ggSubElement.src='';
					me._ht_video_vimeo_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible();
		me._ht_video_vimeo_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_vimeo_custom_image.clientWidth;
			var parentHeight = me._ht_video_vimeo_custom_image.clientHeight;
			var img = me._ht_video_vimeo_custom_image__img;
			var aspectRatioDiv = me._ht_video_vimeo_custom_image.clientWidth / me._ht_video_vimeo_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_vimeo_custom_image.ggScrollbars || currentWidth < me._ht_video_vimeo_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_vimeo_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_vimeo_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_vimeo_custom_image.ggScrollbars || currentHeight < me._ht_video_vimeo_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_vimeo_custom_image.scrollTop=currentHeight / 2 - me._ht_video_vimeo_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_custom_image);
		me._ht_video_vimeo.logicBlock_visible();
		me.elementMouseOver['ht_video_vimeo']=false;
		me._ht_video_vimeo_bg.logicBlock_visible();
		me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_video_vimeo_bg']=false;
		me._ht_video_vimeo_title.logicBlock_position();
		me._ht_video_vimeo_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_vimeo_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_vimeo_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_vimeo_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_vimeo_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_title.logicBlock_position();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_vimeo_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.__div = me._ht_video_vimeo;
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 382px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube.style.transition='';
				if (me._ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube.style.visibility=(Number(me._ht_video_youtube.style.opacity)>0||!me._ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube.ggVisible=true;
				}
				else {
					me._ht_video_youtube.style.visibility="hidden";
					me._ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible();
		me._ht_video_youtube.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_youtube_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._ht_video_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._ht_video_popup_title.ggUpdateText();
				skin._ht_video_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._ht_video_popup_youtube.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._youtube_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_youtube']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_bg=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_bg.style.transition='background-color 100ms ease 0ms';
				if (me._ht_video_youtube_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_bg.style.visibility="hidden";
					me._ht_video_youtube_bg.ggVisible=false;
				}
				else {
					me._ht_video_youtube_bg.style.visibility=(Number(me._ht_video_youtube_bg.style.opacity)>0||!me._ht_video_youtube_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_bg.logicBlock_visible();
		me._ht_video_youtube_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_youtube_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_youtube_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_youtube_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_youtube_bg.style.transition='background-color 100ms ease 0ms';
				if (me._ht_video_youtube_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_youtube_bg.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._ht_video_youtube_bg.style.backgroundColor="rgba(80,80,80,0.392157)";
				}
			}
		}
		me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		me._ht_video_youtube_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_youtube_bg']=true;
			me._ht_video_youtube_title.logicBlock_alpha();
			me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_youtube_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_youtube_bg']=false;
			me._ht_video_youtube_title.logicBlock_alpha();
			me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_youtube_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_icon=document.createElement('div');
		els=me._ht_video_youtube_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyMCAyMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAyMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNjMmU4MTI7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTkuMyw1LjggMTMuNCwxMCAxOS4zLDE0LjIgIi8+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMi40LDQuMmg5LjJjMC45LDAsMS43LDAuNywxLjcsMS43djguM2MwLDAuOS0wLjcsMS43LTEuNywxLjdIMi40Yy0wLjksMC0xLjctMC43LTEuNy0xLjdWNS44JiN4YTsmI3g5O0MwLjcsNC45LDEuNSw0LjIsMi40'+
			'LDQuMnoiLz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_bg.appendChild(me._ht_video_youtube_icon);
		el=me._ht_video_youtube_title=document.createElement('div');
		els=me._ht_video_youtube_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_youtube_title";
		el.ggDx=0;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 34px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_youtube_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_youtube_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_youtube_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_youtube_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_youtube_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_youtube_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_youtube_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_video_youtube_title.ggCurrentLogicStatePosition == 0) {
					me._ht_video_youtube_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_youtube_title.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -34px)';
				}
				else {
					me._ht_video_youtube_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_youtube_title.style.top='calc(50% - ((0px + 0px) / 2) + 34px)';
				}
			}
		}
		me._ht_video_youtube_title.logicBlock_position();
		me._ht_video_youtube_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_youtube_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_video_youtube_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_youtube_title.style.visibility=me._ht_video_youtube_title.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_youtube_title.style.opacity == 0.0) { me._ht_video_youtube_title.style.visibility="hidden"; } }, 305);
					me._ht_video_youtube_title.style.opacity=0;
				}
			}
		}
		me._ht_video_youtube_title.logicBlock_alpha();
		me._ht_video_youtube_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_bg.appendChild(me._ht_video_youtube_title);
		me._ht_video_youtube.appendChild(me._ht_video_youtube_bg);
		el=me._ht_video_youtube_custom_image=document.createElement('div');
		els=me._ht_video_youtube_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_youtube_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_youtube_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_youtube_custom_image.ggAltText));
			me._ht_video_youtube_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_youtube_custom_image.ggText_untranslated = img;
			me._ht_video_youtube_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_youtube_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_youtube_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_youtube_custom_image.ggSubElement.src='';
			me._ht_video_youtube_custom_image.ggSubElement.src=me._ht_video_youtube_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_youtube_custom_image.ggText != player._(me._ht_video_youtube_custom_image.ggText_untranslated)) {
				me._ht_video_youtube_custom_image.ggText = player._(me._ht_video_youtube_custom_image.ggText_untranslated);
				me._ht_video_youtube_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_youtube_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_custom_image.style.transition='';
				if (me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_custom_image.style.visibility=(Number(me._ht_video_youtube_custom_image.style.opacity)>0||!me._ht_video_youtube_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_custom_image.ggSubElement.src=me._ht_video_youtube_custom_image.ggText;
					me._ht_video_youtube_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_youtube_custom_image.style.visibility="hidden";
					me._ht_video_youtube_custom_image.ggSubElement.src='';
					me._ht_video_youtube_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_custom_image.logicBlock_visible();
		me._ht_video_youtube_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_youtube_custom_image.clientWidth;
			var parentHeight = me._ht_video_youtube_custom_image.clientHeight;
			var img = me._ht_video_youtube_custom_image__img;
			var aspectRatioDiv = me._ht_video_youtube_custom_image.clientWidth / me._ht_video_youtube_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_youtube_custom_image.ggScrollbars || currentWidth < me._ht_video_youtube_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_youtube_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_youtube_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_youtube_custom_image.ggScrollbars || currentHeight < me._ht_video_youtube_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_youtube_custom_image.scrollTop=currentHeight / 2 - me._ht_video_youtube_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_custom_image);
		me._ht_video_youtube.logicBlock_visible();
		me.elementMouseOver['ht_video_youtube']=false;
		me._ht_video_youtube_bg.logicBlock_visible();
		me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_video_youtube_bg']=false;
		me._ht_video_youtube_title.logicBlock_position();
		me._ht_video_youtube_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_youtube_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_youtube_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_youtube_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_youtube_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_youtube_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_title.logicBlock_position();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_youtube_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.__div = me._ht_video_youtube;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_video_youtube') {
				hotspot.skinid = 'ht_video_youtube';
				hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_vimeo') {
				hotspot.skinid = 'ht_video_vimeo';
				hsinst = new SkinHotspotClass_ht_video_vimeo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_url') {
				hotspot.skinid = 'ht_video_url';
				hsinst = new SkinHotspotClass_ht_video_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_file') {
				hotspot.skinid = 'ht_video_file';
				hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_pdf') {
				hotspot.skinid = 'ht_pdf';
				hsinst = new SkinHotspotClass_ht_pdf(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_url';
				hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._map_timer.ggUpdateConditionTimer();
		if (me._map_timer.ggLastIsActive!=me._map_timer.ggIsActive()) {
			me._map_timer.ggLastIsActive=me._map_timer.ggIsActive();
			if (me._map_timer.ggLastIsActive) {
			} else {
				if (me._map.ggFitBounds) me._map.ggFitBounds(true);
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggmarkdown a { color: #aaa; } .ggdefaulthotspot { font-family:"Hepta Slab", serif; font-size: 14px; -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-bottom: 0.2em } .ggmarkdown { white-space: normal; } .hepta_slab { font-family: "Hepta Slab", serif; } .karla { font-family: "Karla", sans-serif; line-height: 1.3 } .glow { -webkit-filter: drop-shadow( 0px 0px 3px rgba(255, 255, 255, 0.7)); filter: drop-shadow( 0px 0px 3px rgba(255, 255, 255, 0.7)); } .shadow { -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .shadow_title { -webkit-filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.3)); filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.3)); } .ggskin_text>div::-webkit-scrollbar { width: 5px; } .ggskin_text>div { scrollbar-width: thin; }@font-face { font-family: "Hepta Slab"; font-style: normal; font-weight: 500; src: local(""), url("$(skinbase)fonts/hepta-slab-latin-500.woff2") format("woff2"); } @font-face { font-family: "Karla"; font-style: normal; font-weight: 300; src: local(""), url("$(skinbase)fonts/karla-latin-300.woff2") format("woff2"); } @font-face { font-family: "Karla"; font-style: normal; font-weight: 700; src: local(""), url("$(skinbase)fonts/karla-latin-700.woff2") format("woff2"); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};
function onYouTubeIframeAPIReady() {
	setTimeout(function(){
		var videoElements = document.querySelectorAll('.ggskin_video');
		for (var i=0; i<videoElements.length; i++) {
			if (videoElements[i].ggYoutubeApiReady) {
				videoElements[i].ggYoutubeApiReady();
			}
		}
	}, 1000);
}