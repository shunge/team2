define(["../core","./var/rnumnonpx","./var/rmargin","./var/getStyles","./support","../selector"],function(t,i,e,n,r){function d(d,a,h){var o,m,s,u,c=d.style;return h=h||n(d),h&&(u=h.getPropertyValue(a)||h[a],""!==u||t.contains(d.ownerDocument,d)||(u=t.style(d,a)),!r.pixelMarginRight()&&i.test(u)&&e.test(a)&&(o=c.width,m=c.minWidth,s=c.maxWidth,c.minWidth=c.maxWidth=c.width=u,u=h.width,c.width=o,c.minWidth=m,c.maxWidth=s)),void 0!==u?u+"":u}return d});