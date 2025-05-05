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
    { url: "https://719992c7df5.foxtiming.com/sub/c9b15ee0add901664ac08ec90252cfb5#Foxtiming", type: "subscription", isBase64: true },
    { url: "https://odbar.stdu.nyc.mn/v2ray", type: "subscription", isBase64: true },
  ];

  const uniqueStrings = new Set();

  // 带有重试机制的 fetch 函数
  async function fetchWithRetry(url, retries = 3, timeout = 5000) {
    for (let i = 0; i < retries; i++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response;
      } catch (error) {
        if (i === retries - 1) {
          console.log(`Failed to fetch ${url} after ${retries} attempts: ${error.message}`);
          throw error;
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // 等待 1 秒后重试
      }
    }
  }

  // 获取并处理单个站点的数据
  async function fetchData(site) {
    try {
      const response = await fetchWithRetry(site.url);
      let data;
      if (site.type === 'clash' || site.type === 'subscription') {
        data = await response.text();
        if (!data.trim()) {
          console.log(`Empty response for ${site.url}`);
          return;
        }
        if (site.isBase64) {
          try {
            data = atob(data.trim());
          } catch (e) {
            console.log(`Base64 decode failed for ${site.url}: ${e.message}`);
            return;
          }
        }
      } else {
        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          console.log(`Invalid content-type for ${site.url}: ${contentType}`);
          return;
        }
        data = await response.json();
        if (!data || Object.keys(data).length === 0) {
          console.log(`Empty JSON for ${site.url}`);
          return;
        }
      }
      processData(site.type, data);
    } catch (error) {
      console.log(`Error processing ${site.url}: ${error.message}`);
    }
  }

  // 根据类型处理数据
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
      try {
        processors[type](data);
      } catch (e) {
        console.log(`Processing failed for type ${type}: ${e.message}`);
      }
    }
  }

  // 处理 Hysteria 数据
  function processHysteria(data) {
    const { up_mbps, down_mbps, auth_str, server_name, alpn, server } = data;
    if (!server || !up_mbps || !down_mbps || !auth_str || !server_name || !alpn) {
      console.log(`Missing fields in hysteria data: ${JSON.stringify(data)}`);
      return;
    }
    const formattedString = `hysteria://${server}?upmbps=${up_mbps}&downmbps=${down_mbps}&auth=${auth_str}&insecure=1&peer=${server_name}&alpn=${alpn}`;
    uniqueStrings.add(formattedString);
  }

  // 处理 Hysteria2 数据
  function processHysteria2(data) {
    const auth = data.auth || '';
    const server = data.server || '';
    const insecure = data.tls && data.tls.insecure ? 1 : 0;
    const sni = data.tls ? data.tls.sni || '' : '';
    if (!server) {
      console.log(`Missing server in hysteria2 data: ${JSON.stringify(data)}`);
      return;
    }
    const formattedString = `hysteria2://${auth}@${server}?insecure=${insecure}&sni=${sni}`;
    uniqueStrings.add(formattedString);
  }

  // 处理 Xray 数据
  function processXray(data) {
    const outbound = data.outbounds?.[0];
    if (!outbound) {
      console.log(`No outbounds in xray data: ${JSON.stringify(data)}`);
      return;
    }
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

      if (!id || !address || !port) {
        console.log(`Missing fields in xray vless/vmess data: ${JSON.stringify(outbound)}`);
        return;
      }

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

      if (!password || !address || !port) {
        console.log(`Missing fields in xray trojan data: ${JSON.stringify(outbound)}`);
        return;
      }

      const formattedString = `trojan://${password}@${address}:${port}?security=${security}&sni=${sni}&fp=${fp}&type=${type}&path=${path}&host=${host}`;
      uniqueStrings.add(formattedString);
    }
  }

  // 处理 Singbox 数据
  function processSingbox(data) {
    const { up_mbps, down_mbps, auth_str, server_name, alpn, server, server_port } = data;
    if (!server || !server_port || !up_mbps || !down_mbps || !auth_str || !server_name || !alpn) {
      console.log(`Missing fields in singbox data: ${JSON.stringify(data)}`);
      return;
    }
    const formattedString = `hysteria://${server}:${server_port}?upmbps=${up_mbps}&downmbps=${down_mbps}&auth=${auth_str}&insecure=1&peer=${server_name}&alpn=${alpn}`;
    uniqueStrings.add(formattedString);
  }

  // 处理 Clash 数据（需要 YAML 解析库支持）
  function processClash(data) {
    const jsyaml = require('js-yaml');
    try {
      const content = jsyaml.load(data);
      const proxies = content.proxies || [];
      proxies.forEach(proxy => {
        if (proxy.type === 'hysteria') {
          const server = proxy.server;
          const port = proxy.port;
          const auth = proxy['auth-str'] || proxy['auth_str'] || '';
          const sni = proxy.sni || '';
          const up = typeof proxy.up === 'number' ? proxy.up : (parseInt(proxy.up) || 0);
          const down = typeof proxy.down === 'number' ? proxy.down : (parseInt(proxy.down) || 0);
          const alpn = proxy.alpn?.[0] || '';
          if (!server || !port || !auth) {
            console.log(`Missing fields in clash hysteria proxy: ${JSON.stringify(proxy)}`);
            return;
          }
          const formattedString = `hysteria://${server}:${port}?peer=${sni}&upmbps=${up}&downmbps=${down}&auth=${auth}&insecure=1&alpn=${alpn}`;
          uniqueStrings.add(formattedString);
        } else if (proxy.type === 'hysteria2') {
          const server = proxy.server;
          const port = proxy.port;
          const auth = proxy.password || '';
          const sni = proxy.sni || '';
          const insecure = proxy['skip-cert-verify'] ? 1 : 0;
          if (!server || !port) {
            console.log(`Missing fields in clash hysteria2 proxy: ${JSON.stringify(proxy)}`);
            return;
          }
          const formattedString = `hysteria2://${auth}@${server}:${port}?insecure=${insecure}&sni=${sni}`;
          uniqueStrings.add(formattedString);
        }
      });
    } catch (e) {
      console.log(`YAML parsing failed: ${e.message}`);
    }
  }

  // 处理 Naive 数据
  function processNaive(data) {
    const proxy_str = data.proxy;
    if (!proxy_str) {
      console.log(`Missing proxy field in naive data: ${JSON.stringify(data)}`);
      return;
    }
    const naiveproxy = btoa(unescape(encodeURIComponent(proxy_str)));
    uniqueStrings.add(naiveproxy);
  }

  // 处理订阅数据
  function processSubscription(data) {
    const lines = data.split('\n').map(line => line.trim()).filter(line => {
      return line && (
        line.startsWith('vless://') ||
        line.startsWith('vmess://') ||
        line.startsWith('trojan://') ||
        line.startsWith('hysteria://') ||
        line.startsWith('hysteria2://')
      );
    });
    if (lines.length === 0) {
      console.log(`No valid subscription lines found: ${data.substring(0, 100)}...`);
    }
    lines.forEach(line => uniqueStrings.add(line));
  }

  // 并行处理所有站点
  const promises = sites.map(site => fetchData(site));
  await Promise.all(promises);

  // 合并并编码结果
  const mergedContent = Array.from(uniqueStrings).join("\n");
  const encoder = new TextEncoder();
  const buffer = encoder.encode(mergedContent);
  const base64Str = btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));

  return new Response(base64Str, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
