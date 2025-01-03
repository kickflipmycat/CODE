import socket
from IPy import IP

ipaddress = input("[+] Enter target IP:")
port = 80

try:
  sock = socket.socket()
  sock.connect((ipaddress, port))
except:
  print("[+] Port is closed")