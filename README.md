# ansible-wireguard-proxy

Set up a Proxy Auto-Configuration file for use with Mullvad Wireguard SOCKS5 relays.

This allows you to specify which TLDs should go through which relays, useful if you want to be able to view certain region locked websites through specific relays.

# Requirements

- Mullvad VPN account
- Firefox (or another browser that supports adding PAC files)
- Ansible 2.9.x =< (via Ubuntu for Windows)

## Step by step

  - Modify the values in `group_vars/all.yml` to add your location, relays and tld information.
  - Run the playbook: `ansible-playbook -i inventory/ playbook.yml`
  - Commit the output proxy.pac file to a location that can host it
  - Follow the [Mozilla Support guide](https://support.mozilla.org/en-US/kb/connection-settings-firefox) to make use of the proxy.pac file in your browser

If you are hosting it on Github, as I am, you'll need to add `?raw=true` to the end of your URL.

For example: `https://raw.githubusercontent.com/jbjorkang/ansible-wireguard-proxy/master/output/proxy.pac?raw=true`
