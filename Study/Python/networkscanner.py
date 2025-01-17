#!/usr/bin/env python
import scapy.all as scapy

def scan(ip):
  arp_request = scapy.ARP(pdst=ip)
  broadcast = scapy.Ether(dst="ff:ff:ff:ff:ff:ff")
  print(arp_request.summary())
  
  
scan("10.0.2.1/24")
