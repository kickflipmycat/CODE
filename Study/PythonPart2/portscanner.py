import socket
from IPy import IP

ipaddress = input("[+] Enter target IP:")
port = 80

try:
  sock = socket.socket()
  sock.connect((ipaddress, port))
  print("[+] Port 80 is open")
except:
  print("[+] Port 80 is closed")