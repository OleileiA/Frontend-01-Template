// 参考的别人代码，没来的急根据URI的文档编写。
export default function parseURL (url) {
  let a =  document.createElement('a');
  a.href = url;
  return {
    source: url,
    protocol: a.protocol.replace(':',''),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: (function () {
      let ret = {};
      let seg = window.location.search.replace(/^\?/, '').split('&');
      let s;
      seg.forEach(function (item, index) {
        if (!item) {
          return;
        }
        s = seg[index].split('=');
        ret[s[0]] = s[1];
      });
      return ret;
    })(),
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
    hash: a.hash.replace('#',''),
    path: a.pathname.replace(/^([^\/])/,'/$1'),
    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
    segments: a.pathname.replace(/^\//,'').split('/')
  };
}