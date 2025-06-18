#!/usr/bin/env python3

import os

exitstate=0

print("Welcome to Python")
print("This file is running with GitHub Actions")

try:
  if os.environ["GUESS"] == "42":
    print("OS GUESS was correct")
  else:
    print("OS GUESS was wrong")
    exitstate=1
except:
  print("Error variable was not set")
  exitstate=1

print("End of program")
exit(exitstate)
