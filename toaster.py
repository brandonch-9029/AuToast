from selenium import webdriver

options = webdriver.ChromeOptions()
options.add_argument(r'user-data-dir=C:\Users\User\AppData\Local\Google\Chrome\User Data')
options.add_argument("profile-directory=Profile 3")
driver = webdriver.Chrome(options=options)

driver.get("https://www.untappd.com/home")

driver.execute_async_script(open("autoast.js").read())