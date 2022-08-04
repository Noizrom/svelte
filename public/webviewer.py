from tkinter import W
import webview


webview.create_window("Svelte Alcohol", "index.html")
webview.start(http_server=True)