const e=()=>typeof window>"u"?{device:"server",breakpoint:1/0}:window.innerWidth<=420?{device:"mobile",breakpoint:420}:window.innerWidth<=768?{device:"tablet",breakpoint:768}:window.innerWidth<=1280?{device:"laptop",breakpoint:1280}:{device:"desktop",breakpoint:1/0};let{device:i,breakpoint:n}=e();export{i as d};