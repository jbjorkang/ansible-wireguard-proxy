var hosts = "se10-wg.socks5.mullvad.net:1080 se12-wg.socks5.mullvad.net:1080 se13-wg.socks5.mullvad.net:1080 se14-wg.socks5.mullvad.net:1080 se15-wg.socks5.mullvad.net:1080 se16-wg.socks5.mullvad.net:1080 se17-wg.socks5.mullvad.net:1080 se18-wg.socks5.mullvad.net:1080 se19-wg.socks5.mullvad.net:1080 se1-wg.socks5.mullvad.net:1080 se21-wg.socks5.mullvad.net:1080 se22-wg.socks5.mullvad.net:1080 se23-wg.socks5.mullvad.net:1080 se24-wg.socks5.mullvad.net:1080 se25-wg.socks5.mullvad.net:1080 se26-wg.socks5.mullvad.net:1080 se27-wg.socks5.mullvad.net:1080 se28-wg.socks5.mullvad.net:1080 se2-wg.socks5.mullvad.net:1080 se3-wg.socks5.mullvad.net:1080 se4-wg.socks5.mullvad.net:1080 se5-wg.socks5.mullvad.net:1080 se6-wg.socks5.mullvad.net:1080 se7-wg.socks5.mullvad.net:1080 se8-wg.socks5.mullvad.net:1080 se9-wg.socks5.mullvad.net:1080 ";

function FindProxyForURL(url, host)
{
    var hostsArray = hosts.split(" ");
    var randomIndex = Math.floor((Math.random() * hostsArray.length));
    return "PROXY " + hostsArray[randomIndex] + "; DIRECT";
}
