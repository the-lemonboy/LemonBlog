<template>
<router-view/>
</template>

<style lang="scss">
*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
    /* 滚动条样式 */
::-webkit-scrollbar {
	width:6px;
  height:6px;
}			
/* 滑轨 */
::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.2); 
	-webkit-border-radius: 6px;
	border-radius: 6px;
}			
/* Handle */
::-webkit-scrollbar-thumb {
	-webkit-border-radius: 6px;
	border-radius: 6px;
	background: rgba(153,153,153,0.4);
	-webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3); 			  
}
::-webkit-scrollbar-thumb:window-inactive {
	background: rgba(153,153,153,0.4); 			  
}
 
::-webkit-scrollbar-thumb:hover {
    background-color: #777;

}
}


</style>
