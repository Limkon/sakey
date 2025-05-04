addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const sites = [
    { url: "https://www.gitlabip.xyz/Alvin9999/pac2/master/hysteria/1/config.json", type: "hysteria" },
    { url: "https://gitlab.com/free9999/ipupdate/-/raw/master/hysteria/config.json", type: "hysteria" },
    { url: "https://www.githubip.xyz/Alvin9999/pac2/master/hysteria/config.json", type: "hysteria" },
    { url: "https://fastly.jsdelivr.net/gh/Alvin9999/pac2@latest/hysteria/config.json", type: "hysteria" },
    { url: "https://www.gitlabip.xyz/Alvin9999/pac2/master/hysteria/13/config.json", type: "hysteria" },
    { url: "https://gitlab.com/free9999/ipupdate/-/raw/master/hysteria/2/config.json", type: "hysteria" },
    { url: "https://www.githubip.xyz/Alvin9999/pac2/master/hysteria/2/config.json", type: "hysteria" },
    { url: "https://fastly.jsdelivr.net/gh/Alvin9999/pac2@latest/hysteria/2/config.json", type: "hysteria" },
    { url: 'https://www.gitlabip.xyz/Alvin9999/pac2/master/hysteria2/1/config.json', type: "hysteria2" },
    { url: 'https://gitlab.com/free9999/ipupdate/-/raw/master/hysteria2/config.json', type: "hysteria2" },
    { url: 'https://www.githubip.xyz/Alvin9999/pac2/master/hysteria2/config.json', type: "hysteria2" },
    { url: 'https://fastly.jsdelivr.net/gh/Alvin9999/pac2@latest/hysteria2/config.json', type: "hysteria2" },
    { url: 'https://www.gitlabip.xyz/Alvin9999/pac2/master/hysteria2/13/config.json', type: "hysteria2" },
    { url: 'https://gitlab.com/free9999/ipupdate/-/raw/master/hysteria2/2/config.json', type: "hysteria2" },
    { url: 'https://www.githubip.xyz/Alvin9999/pac2/master/hysteria2/2/config.json', type: "hysteria2" },
    { url: 'https://fastly.jsdelivr.net/gh/Alvin9999/pac2@latest/hysteria2/2/config.json', type: "hysteria2" },
    { url: 'https://www.gitlabip.xyz/Alvin9999/pac2/master/xray/1/config.json', type: "xray" },
    { url: 'https://gitlab.com/free9999/ipupdate/-/raw/master/xray/config.json', type: "xray" },
    { url: 'https://www.githubip.xyz/Alvin9999/pac2/master/xray/config.json', type: "xray" },
    { url: 'https://fastly.jsdelivr.net/gh/Alvin9999/pac2@latest/xray/config.json', type: "xray" },
    { url: 'https://www.gitlabip.xyz/Alvin9999/pac2/master/xray/3/config.json', type: "xray" },
    { url: 'https://gitlab.com/free9999/ipupdate/-/raw/master/xray/2/config.json', type: "xray" },
    { url: 'https://www.githubip.xyz/Alvin9999/pac2/master/xray/2/config.json', type: "xray" },
    { url: "https://gitlab.com/free9999/ipupdate/-/raw/master/singbox/config.json", type: "singbox" },
    { url: "https://www.githubip.xyz/Alvin9999/pac2/master/singbox/config.json", type: "singbox" },
    { url: "https://fastly.jsdelivr.net/gh/Alvin9999/pac2@latest/singbox/config.json", type: "singbox" },
    { url: "https://www.gitlabip.xyz/Alvin9999/pac2/master/singbox/1/config.json", type: "singbox" },
    { url: "https://gitlab.com/free9999/ipupdate/-/raw/master/clash.meta2/config.yaml", type: "clash" },
    { url: "https://raw.githubusercontent.com/byrisk/Node/refs/heads/main/config.yaml", type: "clash" },
    { url: "https://www.githubip.xyz/Alvin9999/pac2/master/clash.meta2/config.yaml", type: "clash" },
    { url: "https://fastly.jsdelivr.net/gh/Alvin9999/pac2@latest/clash.meta2/config.yaml", type: "clash" },
    { url: "https://www.gitlabip.xyz/Alvin9999/pac2/master/clash.meta2/13/config.yaml", type: "clash" },
    { url: "https://gitlab.com/free9999/ipupdate/-/raw/master/clash.meta2/2/config.yaml", type: "clash" },
    { url: "https://www.githubip.xyz/Alvin9999/pac2/master/clash.meta2/2/config.yaml", type: "clash" },
    { url: "https://fastly.jsdelivr.net/gh/Alvin9999/pac2@latest/clash.meta2/2/config.yaml", type: "clash" },
    { url: "https://www.gitlabip.xyz/Alvin9999/pac2/master/clash.meta2/15/config.yaml", type: "clash" },
    { url: "https://gitlab.com/free9999/ipupdate/-/raw/master/clash.meta2/3/config.yaml", type: "clash" },
    { url: "https://www.githubip.xyz/Alvin9999/pac2/master/clash.meta2/3/config.yaml", type: "clash" },
    { url: "https://fastly.jsdelivr.net/gh/Alvin9999/pac2@latest/clash.meta2/3/config.yaml", type: "clash" },
    { url: "https://raw.githubusercontent.com/Alvin9999/pac2/master/quick/4/config.yaml", type: "clash" },
    { url: "https://raw.githubusercontent.com/Alvin9999/pac2/master/quick/1/config.yaml", type: "clash" },
    { url: "https://raw.githubusercontent.com/Alvin9999/pac2/master/quick/config.yaml", type: "clash" },
    { url: "https://raw.githubusercontent.com/Alvin9999/pac2/master/quick/3/config.yaml", type: "clash" },
    { url: "https://www.gitlabip.xyz/Alvin9999/PAC/master/naiveproxy/1/config.json", type: "naive" },
    { url: "https://gitlab.com/free9999/ipupdate/-/raw/master/naiveproxy/config.json", type: "naive" },
    { url: "https://www.githubip.xyz/Alvin9999/PAC/master/naiveproxy/config.json", type: "naive" },
    { url: "https://fastly.jsdelivr.net/gh/Alvin9999/PAC@latest/naiveproxy/config.json", type: "naive" },
    { url: "https://jxio.nyc.mn/tools/sub/xio", type: "subscription" },
    { url: "https://odbar.stdu.nyc.mn/v2ray", type: "subscription", isBase64: true },
  ];

  const uniqueStrings = new Set();

  async function fetchData(site) {
    try {
      const response = await fetch(site.url);
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status} for ${site.url}`);
      }
      let data;
      if (site.type === 'clash' || site.type === 'subscription') {
        data = await response.text();
        if (site.isBase64) {
          try {
            data = atob(data.trim()); // 解码 Base64，去除首尾空白
          } catch (e) {
            return;
          }
        }
      } else {
        data = await response.json();
      }
      processData(site.type, data);
    } catch (error) {
      // 忽略错误
    }
  }

  function processData(type, data) {
    const processors = {
      hysteria: processHysteria,
      hysteria2: processHysteria2,
      xray: processXray,
      singbox: processSingbox,
      clash: processClash,
      naive: processNaive,
      subscription: processSubscription,
    };
    if (processors[type]) {
      processors[type](data);
    }
  }

  function processHysteria(data) {
    const { up_mbps, down_mbps, auth_str, server_name, alpn, server } = data;
    const formattedString = `hysteria://${server}?upmbps=${up_mbps}&downmbps=${down_mbps}&auth=${auth_str}&insecure=1&peer=${server_name}&alpn=${alpn}`;
    uniqueStrings.add(formattedString);
  }

  function processHysteria2(data) {
    const auth = data.auth || '';
    const server = data.server || '';
    const insecure = data.tls && data.tls.insecure ? 1 : 0;
    const sni = data.tls ? data.tls.sni || '' : '';
    const formattedString = `hysteria2://${auth}@${server}?insecure=${insecure}&sni=${sni}`;
    uniqueStrings.add(formattedString);
  }

  function processXray(data) {
    const outbound = data.outbounds[0];
    const protocol = outbound.protocol;
    const settings = outbound.settings || {};
    const streamSettings = outbound.streamSettings || {};

    if (protocol === 'vless' || protocol === 'vmess') {
      const vnext = settings.vnext?.[0] || {};
      const user = vnext.users?.[0] || {};
      const id = user.id || '';
      const address = vnext.address || '';
      const port = vnext.port || '';
      const encryption = user.encryption || 'none';
      const security = streamSettings.security || '';
      let fp = streamSettings.tlsSettings?.fingerprint || '';
      const sni = streamSettings.tlsSettings?.serverName || '';
      const type = streamSettings.network || 'tcp';
      const path = streamSettings.wsSettings?.path || '';
      const host = streamSettings.wsSettings?.headers?.Host || '';
      if (security === 'tls' && !fp) fp = 'chrome';

      const formattedString = `${protocol}://${id}@${address}:${port}?encryption=${encryption}&security=${security}&sni=${sni}&fp=${fp}&type=${type}&path=${path}&host=${host}`;
      uniqueStrings.add(formattedString);
    } else if (protocol === 'trojan') {
      const trojanSettings = settings.trojan || settings.clients?.[0] || {};
      const password = trojanSettings.password || '';
      const address = settings.servers?.[0]?.address || '';
      const port = settings.servers?.[0]?.port || '';
      const security = streamSettings.security || '';
      let fp = streamSettings.tlsSettings?.fingerprint || '';
      const sni = streamSettings.tlsSettings?.serverName || '';
      const type = streamSettings.network || 'tcp';
      const path = streamSettings.wsSettings?.path || '';
      const host = streamSettings.wsSettings?.headers?.Host || '';
      if (security === 'tls' && !fp) fp = 'chrome';

      const formattedString = `trojan://${password}@${address}:${port}?security=${security}&sni=${sni}&fp=${fp}&type=${type}&path=${path}&host=${host}`;
      uniqueStrings.add(formattedString);
    } else {
      const vnext = settings.vnext?.[0] || {};
      const id = vnext.users?.[0]?.id || '';
      const address = vnext.address || '';
      const port = vnext.port || '';
      const security = streamSettings.security || '';
      let fp = streamSettings.tlsSettings?.fingerprint || '';
      const sni = streamSettings.tlsSettings?.serverName || '';
      const type = streamSettings.network || '';
      const path = streamSettings.wsSettings?.path || '';
      const host = streamSettings.wsSettings?.headers?.Host || '';
      if (security === 'tls' && !fp) fp = 'chrome';

      const formattedString = `${protocol}://${id}@${address}:${port}?security=${security}&sni=${sni}&fp=${fp}&type=${type}&path=${path}&host=${host}`;
      uniqueStrings.add(formattedString);
    }
  }

  function processSingbox(data) {
    const { up_mbps, down_mbps, auth_str, server_name, alpn, server, server_port } = data;
    const formattedString = `hysteria://${server}:${server_port}?upmbps=${up_mbps}&downmbps=${down_mbps}&auth=${auth_str}&insecure=1&peer=${server_name}&alpn=${alpn}`;
    uniqueStrings.add(formattedString);
  }

  function processClash(data) {
    const jsyaml = require('js-yaml');
    const content = jsyaml.load(data);
    const proxies = content.proxies || [];
    proxies.forEach(proxy => {
      let type = proxy.type;
      if (type === 'hysteria') {
        const server = proxy.server;
        const port = proxy.port;
        const protocol = proxy.protocol;
        const up = typeof proxy.up === 'number' ? proxy.up : (parseInt(proxy.up) || 0);
        const down = typeof proxy.down === 'number' ? proxy.down : (parseInt(proxy.down) || 0);
        const ports = proxy.port ?? '';
        const obfs = proxy.obfs ?? '';
        const fast_open = proxy['fast_open'] ?? 1;
        const auth = proxy['auth-str'] || proxy['auth_str'];
        const alpn = proxy.alpn[0];
        const sni = proxy.sni ?? '';
        const name = proxy.name ?? 'hy1';
        const formattedString = `hysteria://${server}:${port}?peer=${sni}&upmbps=${up}&downmbps=${down}&auth=${auth}&obfs=${obfs}&mport=${ports}&protocol=${protocol}&fastopen=${fast_open}&insecure=1&alpn=${alpn}#${name}`;
        uniqueStrings.add(formattedString);
      } else if (type === 'hysteria2') {
        const server = proxy.server;
        const port = proxy.port;
        const auth = proxy.password || "";
        const obfs = proxy.obfs || '';
        const obfs_password = proxy['obfs-password'] || '';
        const sni = proxy.sni || '';
        const insecure = proxy['skip-cert-verify'] || 1;
        const name = proxy.name || 'hy2';
        const formattedString = `hysteria2://${server}:${port}?&auth=${auth}&obfs=${obfs}&obfs-password=${obfs_password}&insecure=${insecure}&sni=${sni}#${name}`;
        uniqueStrings.add(formattedString);
      } else if (type === 'clash') {
        const formattedString = `clash://${proxy.server}:${proxy.port}`;
        uniqueStrings.add(formattedString);
      }
    });
  }

  function processNaive(data) {
    const proxy_str = data.proxy;
    const naiveproxy = btoa(unescape(encodeURIComponent(proxy_str)));
    uniqueStrings.add(naiveproxy);
  }

  function processSubscription(data) {
    const lines = data.split('\n').map(line => line.trim()).filter(line => line && (line.startsWith('vless://') || line.startsWith('vmess://')));
    lines.forEach(line => uniqueStrings.add(line));
  }

  const promises = sites.map(site => fetchData(site));
  await Promise.all(promises);

  const mergedContent = Array.from(uniqueStrings).join("\n");
  const encoder = new TextEncoder();
  const buffer = encoder.encode(mergedContent);
  const base64Str = btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));

  return new Response(base64Str, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
