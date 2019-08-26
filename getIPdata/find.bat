for /L %%i in (1,1,254) do ping 192.168.30.%%i -n 1 -w 300 > NUL
arp -a