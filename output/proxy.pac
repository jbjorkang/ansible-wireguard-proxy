function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.se"))
    return "SOCKS5 se1-wg.socks5.mullvad.net:1080;" + "SOCKS5 se3-wg.socks5.mullvad.net:1080;" + "SOCKS5 se5-wg.socks5.mullvad.net:1080;" + "SOCKS5 se6-wg.socks5.mullvad.net:1080;" + "SOCKS5 se7-wg.socks5.mullvad.net:1080;" + "SOCKS5 se8-wg.socks5.mullvad.net:1080;" + "SOCKS5 se9-wg.socks5.mullvad.net:1080;" + "SOCKS5 se10-wg.socks5.mullvad.net:1080;" + "SOCKS5 se12-wg.socks5.mullvad.net:1080;" + "SOCKS5 se13-wg.socks5.mullvad.net:1080;" + "SOCKS5 se14-wg.socks5.mullvad.net:1080;" + "SOCKS5 se15-wg.socks5.mullvad.net:1080;" + "SOCKS5 se17-wg.socks5.mullvad.net:1080;" + "SOCKS5 se18-wg.socks5.mullvad.net:1080;" + "SOCKS5 se19-wg.socks5.mullvad.net:1080;" + "SOCKS5 se21-wg.socks5.mullvad.net:1080;" + "SOCKS5 se22-wg.socks5.mullvad.net:1080;" + "SOCKS5 se23-wg.socks5.mullvad.net:1080;" + "SOCKS5 se24-wg.socks5.mullvad.net:1080" ; 
  else if  (shExpMatch(host, "*.co.uk"))
    return "SOCKS5 gb31-wg.socks5.mullvad.net:1080;" + "SOCKS5 gb32-wg.socks5.mullvad.net:1080" ; 
  else
  return "DIRECT";
}
