(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"YD+O":function(t,e,i){"use strict";i.d(e,"b",function(){return a}),i.d(e,"a",function(){return h});var s=i("8Y7J");function r(t,e){return new Promise((i,s)=>{const r=new Image;r.onload=function(){const t=r.width,h=r.height,a=document.createElement("canvas"),o=a.getContext("2d");o?(4<e&&e<9?(a.width=h,a.height=t):(a.width=t,a.height=h),function(t,i,s,r){switch(e){case 2:t.transform(-1,0,0,1,s,0);break;case 3:t.transform(-1,0,0,-1,s,r);break;case 4:t.transform(1,0,0,-1,0,r);break;case 5:t.transform(0,1,1,0,0,0);break;case 6:t.transform(0,1,-1,0,r,0);break;case 7:t.transform(0,-1,-1,0,r,s);break;case 8:t.transform(0,-1,1,0,0,s)}}(o,0,t,h),o.drawImage(r,0,0),i(a.toDataURL())):s(new Error("No context"))},r.src=t})}let h=(()=>(class{constructor(t,e,i){this.sanitizer=t,this.cd=e,this.zone=i,this.setImageMaxSizeRetries=0,this.cropperScaledMinWidth=20,this.cropperScaledMinHeight=20,this.marginLeft="0px",this.imageVisible=!1,this.format="png",this.outputType="both",this.maintainAspectRatio=!0,this.aspectRatio=1,this.resizeToWidth=0,this.resizeToHeight=0,this.cropperMinWidth=0,this.cropperMinHeight=0,this.roundCropper=!1,this.onlyScaleDown=!1,this.imageQuality=92,this.autoCrop=!0,this.containWithinAspectRatio=!1,this.cropper={x1:-100,y1:-100,x2:1e4,y2:1e4},this.alignImage="center",this.startCropImage=new s.EventEmitter,this.imageCropped=new s.EventEmitter,this.imageCroppedBase64=new s.EventEmitter,this.imageCroppedFile=new s.EventEmitter,this.imageLoaded=new s.EventEmitter,this.cropperReady=new s.EventEmitter,this.loadImageFailed=new s.EventEmitter,this.initCropper()}set imageFileChanged(t){this.initCropper(),t&&this.loadImageFile(t)}set imageChangedEvent(t){this.initCropper(),t&&t.target&&t.target.files&&t.target.files.length>0&&this.loadImageFile(t.target.files[0])}set imageBase64(t){this.initCropper(),this.checkExifAndLoadBase64Image(t)}ngOnChanges(t){t.cropper&&(this.setMaxSize(),this.setCropperScaledMinSize(),this.checkCropperPosition(!1),this.doAutoCrop(),this.cd.markForCheck()),t.aspectRatio&&this.imageVisible&&this.resetCropperPosition()}initCropper(){this.imageVisible=!1,this.originalImage=null,this.safeImgDataUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=",this.moveStart={active:!1,type:null,position:null,x1:0,y1:0,x2:0,y2:0,clientX:0,clientY:0},this.maxSize={width:0,height:0},this.originalSize={width:0,height:0},this.cropper.x1=-100,this.cropper.y1=-100,this.cropper.x2=1e4,this.cropper.y2=1e4}loadImageFile(t){const e=new FileReader;e.onload=e=>{this.isValidImageType(t.type)?this.checkExifAndLoadBase64Image(e.target.result):this.loadImageFailed.emit()},e.readAsDataURL(t)}isValidImageType(t){return/image\/(png|jpg|jpeg|bmp|gif|tiff)/.test(t)}checkExifAndLoadBase64Image(t){(function(t){try{const i=function(e){const i=new DataView(function(t){t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");const e=atob(t),i=e.length,s=new Uint8Array(i);for(let r=0;r<i;r++)s[r]=e.charCodeAt(r);return s.buffer}(t));if(65496!=i.getUint16(0,!1))return-2;const s=i.byteLength;let r=2;for(;r<s;){if(i.getUint16(r+2,!1)<=8)return-1;const t=i.getUint16(r,!1);if(r+=2,65505==t){if(1165519206!=i.getUint32(r+=2,!1))return-1;const t=18761==i.getUint16(r+=6,!1);r+=i.getUint32(r+4,t);const e=i.getUint16(r,t);r+=2;for(let s=0;s<e;s++)if(274==i.getUint16(r+12*s,t))return i.getUint16(r+12*s+8,t)}else{if(65280!=(65280&t))break;r+=i.getUint16(r,!1)}}return-1}();return i>1?r(t,i):Promise.resolve(t)}catch(e){return Promise.reject(e)}})(t).then(t=>this.fitImageToAspectRatio(t)).then(t=>this.loadBase64Image(t)).catch(()=>this.loadImageFailed.emit())}fitImageToAspectRatio(t){return this.containWithinAspectRatio?(e=t,i=this.aspectRatio,new Promise((t,s)=>{const r=new Image;r.onload=function(){const e=document.createElement("canvas"),h=e.getContext("2d");if(h){const s=r.width/i;e.width=Math.max(r.width,r.height*i),e.height=Math.max(r.height,s),h.drawImage(r,(e.width-r.width)/2,(e.height-r.height)/2),t(e.toDataURL())}else s(new Error("No context"))},r.src=e})):Promise.resolve(t);var e,i}loadBase64Image(t){this.originalBase64=t,this.safeImgDataUrl=this.sanitizer.bypassSecurityTrustResourceUrl(t),this.originalImage=new Image,this.originalImage.onload=()=>{this.originalSize.width=this.originalImage.width,this.originalSize.height=this.originalImage.height,this.cd.markForCheck()},this.originalImage.src=t}imageLoadedInView(){null!=this.originalImage&&(this.imageLoaded.emit(),this.setImageMaxSizeRetries=0,setTimeout(()=>this.checkImageMaxSizeRecursively()))}checkImageMaxSizeRecursively(){this.setImageMaxSizeRetries>40?this.loadImageFailed.emit():this.sourceImage&&this.sourceImage.nativeElement&&this.sourceImage.nativeElement.offsetWidth>0?(this.setMaxSize(),this.setCropperScaledMinSize(),this.resetCropperPosition(),this.cropperReady.emit(),this.cd.markForCheck()):(this.setImageMaxSizeRetries++,setTimeout(()=>{this.checkImageMaxSizeRecursively()},50))}onResize(){this.resizeCropperPosition(),this.setMaxSize(),this.setCropperScaledMinSize()}rotateLeft(){this.transformBase64(8)}rotateRight(){this.transformBase64(6)}flipHorizontal(){this.transformBase64(2)}flipVertical(){this.transformBase64(4)}transformBase64(t){this.originalBase64&&r(this.originalBase64,t).then(t=>this.fitImageToAspectRatio(t)).then(t=>this.loadBase64Image(t))}resizeCropperPosition(){const t=this.sourceImage.nativeElement;this.maxSize.width===t.offsetWidth&&this.maxSize.height===t.offsetHeight||(this.cropper.x1=this.cropper.x1*t.offsetWidth/this.maxSize.width,this.cropper.x2=this.cropper.x2*t.offsetWidth/this.maxSize.width,this.cropper.y1=this.cropper.y1*t.offsetHeight/this.maxSize.height,this.cropper.y2=this.cropper.y2*t.offsetHeight/this.maxSize.height)}resetCropperPosition(){const t=this.sourceImage.nativeElement;if(this.maintainAspectRatio)if(t.offsetWidth/this.aspectRatio<t.offsetHeight){this.cropper.x1=0,this.cropper.x2=t.offsetWidth;const e=t.offsetWidth/this.aspectRatio;this.cropper.y1=(t.offsetHeight-e)/2,this.cropper.y2=this.cropper.y1+e}else{this.cropper.y1=0,this.cropper.y2=t.offsetHeight;const e=t.offsetHeight*this.aspectRatio;this.cropper.x1=(t.offsetWidth-e)/2,this.cropper.x2=this.cropper.x1+e}else this.cropper.x1=0,this.cropper.x2=t.offsetWidth,this.cropper.y1=0,this.cropper.y2=t.offsetHeight;this.doAutoCrop(),this.imageVisible=!0}startMove(t,e,i=null){t.preventDefault(),this.moveStart=Object.assign({active:!0,type:e,position:i,clientX:this.getClientX(t),clientY:this.getClientY(t)},this.cropper)}moveImg(t){this.moveStart.active&&(t.stopPropagation(),t.preventDefault(),"move"===this.moveStart.type?(this.move(t),this.checkCropperPosition(!0)):"resize"===this.moveStart.type&&(this.resize(t),this.checkCropperPosition(!1)),this.cd.detectChanges())}setMaxSize(){const t=this.sourceImage.nativeElement;this.maxSize.width=t.offsetWidth,this.maxSize.height=t.offsetHeight,this.marginLeft=this.sanitizer.bypassSecurityTrustStyle("calc(50% - "+this.maxSize.width/2+"px)")}setCropperScaledMinSize(){this.originalImage?(this.setCropperScaledMinWidth(),this.setCropperScaledMinHeight()):(this.cropperScaledMinWidth=20,this.cropperScaledMinHeight=20)}setCropperScaledMinWidth(){this.cropperScaledMinWidth=this.cropperMinWidth>0?Math.max(20,this.cropperMinWidth/this.originalImage.width*this.maxSize.width):20}setCropperScaledMinHeight(){this.cropperScaledMinHeight=this.maintainAspectRatio?Math.max(20,this.cropperScaledMinWidth/this.aspectRatio):this.cropperMinHeight>0?Math.max(20,this.cropperMinHeight/this.originalImage.height*this.maxSize.height):20}checkCropperPosition(t=!1){this.cropper.x1<0&&(this.cropper.x2-=t?this.cropper.x1:0,this.cropper.x1=0),this.cropper.y1<0&&(this.cropper.y2-=t?this.cropper.y1:0,this.cropper.y1=0),this.cropper.x2>this.maxSize.width&&(this.cropper.x1-=t?this.cropper.x2-this.maxSize.width:0,this.cropper.x2=this.maxSize.width),this.cropper.y2>this.maxSize.height&&(this.cropper.y1-=t?this.cropper.y2-this.maxSize.height:0,this.cropper.y2=this.maxSize.height)}moveStop(){this.moveStart.active&&(this.moveStart.active=!1,this.doAutoCrop())}move(t){const e=this.getClientX(t)-this.moveStart.clientX,i=this.getClientY(t)-this.moveStart.clientY;this.cropper.x1=this.moveStart.x1+e,this.cropper.y1=this.moveStart.y1+i,this.cropper.x2=this.moveStart.x2+e,this.cropper.y2=this.moveStart.y2+i}resize(t){const e=this.getClientX(t)-this.moveStart.clientX,i=this.getClientY(t)-this.moveStart.clientY;switch(this.moveStart.position){case"left":this.cropper.x1=Math.min(this.moveStart.x1+e,this.cropper.x2-this.cropperScaledMinWidth);break;case"topleft":this.cropper.x1=Math.min(this.moveStart.x1+e,this.cropper.x2-this.cropperScaledMinWidth),this.cropper.y1=Math.min(this.moveStart.y1+i,this.cropper.y2-this.cropperScaledMinHeight);break;case"top":this.cropper.y1=Math.min(this.moveStart.y1+i,this.cropper.y2-this.cropperScaledMinHeight);break;case"topright":this.cropper.x2=Math.max(this.moveStart.x2+e,this.cropper.x1+this.cropperScaledMinWidth),this.cropper.y1=Math.min(this.moveStart.y1+i,this.cropper.y2-this.cropperScaledMinHeight);break;case"right":this.cropper.x2=Math.max(this.moveStart.x2+e,this.cropper.x1+this.cropperScaledMinWidth);break;case"bottomright":this.cropper.x2=Math.max(this.moveStart.x2+e,this.cropper.x1+this.cropperScaledMinWidth),this.cropper.y2=Math.max(this.moveStart.y2+i,this.cropper.y1+this.cropperScaledMinHeight);break;case"bottom":this.cropper.y2=Math.max(this.moveStart.y2+i,this.cropper.y1+this.cropperScaledMinHeight);break;case"bottomleft":this.cropper.x1=Math.min(this.moveStart.x1+e,this.cropper.x2-this.cropperScaledMinWidth),this.cropper.y2=Math.max(this.moveStart.y2+i,this.cropper.y1+this.cropperScaledMinHeight)}this.maintainAspectRatio&&this.checkAspectRatio()}checkAspectRatio(){let t=0,e=0;switch(this.moveStart.position){case"top":this.cropper.x2=this.cropper.x1+(this.cropper.y2-this.cropper.y1)*this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(0-this.cropper.y1,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y1+=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"bottom":this.cropper.x2=this.cropper.x1+(this.cropper.y2-this.cropper.y1)*this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(this.cropper.y2-this.maxSize.height,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y2-=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"topleft":this.cropper.y1=this.cropper.y2-(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(0-this.cropper.x1,0),e=Math.max(0-this.cropper.y1,0),(t>0||e>0)&&(this.cropper.x1+=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y1+=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"topright":this.cropper.y1=this.cropper.y2-(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(0-this.cropper.y1,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y1+=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"right":case"bottomright":this.cropper.y2=this.cropper.y1+(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(this.cropper.y2-this.maxSize.height,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y2-=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"left":case"bottomleft":this.cropper.y2=this.cropper.y1+(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(0-this.cropper.x1,0),e=Math.max(this.cropper.y2-this.maxSize.height,0),(t>0||e>0)&&(this.cropper.x1+=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y2-=e*this.aspectRatio>t?e:t/this.aspectRatio)}}doAutoCrop(){this.autoCrop&&this.crop()}crop(t=this.outputType){if(this.sourceImage.nativeElement&&null!=this.originalImage){this.startCropImage.emit();const e=this.getImagePosition(),i=e.x2-e.x1,s=e.y2-e.y1,r=document.createElement("canvas");r.width=i,r.height=s;const h=r.getContext("2d");if(h){null!=this.backgroundColor&&(h.fillStyle=this.backgroundColor,h.fillRect(0,0,i,s)),h.drawImage(this.originalImage,e.x1,e.y1,i,s,0,0,i,s);const a={width:i,height:s,imagePosition:e,cropperPosition:Object.assign({},this.cropper)},o=this.getResizeRatio(i,s);return 1!==o&&(a.width=Math.round(i*o),a.height=this.maintainAspectRatio?Math.round(a.width/this.aspectRatio):Math.round(s*o),function(t,e,i,s=!0){const r=t.width,h=t.height,a=r/(e=Math.round(e)),o=h/(i=Math.round(i)),p=Math.ceil(a/2),c=Math.ceil(o/2),n=t.getContext("2d");if(n){const m=n.getImageData(0,0,r,h),g=n.createImageData(e,i),l=m.data,d=g.data;for(let t=0;t<i;t++)for(let i=0;i<e;i++){const s=4*(i+t*e),n=t*o;let m=0,g=0,x=0,f=0,u=0,S=0,y=0;const M=Math.floor(i*a),R=Math.floor(t*o);let w=Math.ceil((i+1)*a),v=Math.ceil((t+1)*o);w=Math.min(w,r),v=Math.min(v,h);for(let t=R;t<v;t++){const e=Math.abs(n-t)/c,s=i*a,h=e*e;for(let i=M;i<w;i++){const e=Math.abs(s-i)/p,a=Math.sqrt(h+e*e);if(a>=1)continue;const o=4*(i+t*r);y+=(m=2*a*a*a-3*a*a+1)*l[o+3],x+=m,l[o+3]<255&&(m=m*l[o+3]/250),f+=m*l[o],u+=m*l[o+1],S+=m*l[o+2],g+=m}}d[s]=f/g,d[s+1]=u/g,d[s+2]=S/g,d[s+3]=y/x}s?(t.width=e,t.height=i):n.clearRect(0,0,r,h),n.putImageData(g,0,0)}}(r,a.width,a.height)),this.cropToOutputType(t,r,a)}}return null}getImagePosition(){const t=this.originalSize.width/this.sourceImage.nativeElement.offsetWidth;return{x1:Math.round(this.cropper.x1*t),y1:Math.round(this.cropper.y1*t),x2:Math.min(Math.round(this.cropper.x2*t),this.originalSize.width),y2:Math.min(Math.round(this.cropper.y2*t),this.originalSize.height)}}cropToOutputType(t,e,i){switch(t){case"file":return this.cropToFile(e).then(t=>(i.file=t,this.imageCropped.emit(i),i));case"both":return i.base64=this.cropToBase64(e),this.cropToFile(e).then(t=>(i.file=t,this.imageCropped.emit(i),i));default:return i.base64=this.cropToBase64(e),this.imageCropped.emit(i),i}}cropToBase64(t){const e=t.toDataURL("image/"+this.format,this.getQuality());return this.imageCroppedBase64.emit(e),e}cropToFile(t){return this.getCanvasBlob(t).then(t=>(t&&this.imageCroppedFile.emit(t),t))}getCanvasBlob(t){return new Promise(e=>{t.toBlob(t=>this.zone.run(()=>e(t)),"image/"+this.format,this.getQuality())})}getQuality(){return Math.min(1,Math.max(0,this.imageQuality/100))}getResizeRatio(t,e){if(this.resizeToWidth>0){if(!this.onlyScaleDown||t>this.resizeToWidth)return this.resizeToWidth/t}else if(this.resizeToHeight>0&&(!this.onlyScaleDown||e>this.resizeToHeight))return this.resizeToHeight/e;return 1}getClientX(t){return t.clientX||t.touches&&t.touches[0]&&t.touches[0].clientX}getClientY(t){return t.clientY||t.touches&&t.touches[0]&&t.touches[0].clientY}}))(),a=(()=>(class{}))()}}]);