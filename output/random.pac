var hosts = "se-got-wg-001 se-got-wg-002 se-got-wg-003 se-got-wg-004 se-got-wg-005 se-got-wg-006 se-got-wg-007 se-got-wg-008 se-got-wg-101 se-mma-wg-001 se-mma-wg-002 se-mma-wg-003 se-mma-wg-004 se-mma-wg-005 se-mma-wg-011 se-mma-wg-012 se-mma-wg-101 se-mma-wg-102 se-mma-wg-103 se-mma-wg-111 se-mma-wg-112 se-sto-wg-001 se-sto-wg-002 se-sto-wg-003 se-sto-wg-004 se-sto-wg-005 se-sto-wg-006 se-sto-wg-007 se-sto-wg-008 se-sto-wg-009 se-sto-wg-010 se-sto-wg-011 se-sto-wg-012 se-sto-wg-013 se-sto-wg-014 se-sto-wg-201 se-sto-wg-202 se-sto-wg-203 se-sto-wg-204 se-sto-wg-205 se-sto-wg-206 se-sto-wg-207 se-sto-wg-208 se-sto-wg-209 ";

function FindProxyForURL(url, host)
{
    var hostsArray = hosts.split(" ");
    var randomIndex = Math.floor((Math.random() * hostsArray.length));
    return "PROXY " + hostsArray[randomIndex] + "; DIRECT";
}
