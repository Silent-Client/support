const multiplayer_issues = {
	name: "Multiplayer Connection Issues",
	link: "multiplayer-connection-issues",
	body: `We have created this article to help any Minecraft Client user resolve multiplayer connection issues. In this help article, you will find information about the following connection errors:
	<br/><br/>
	<ul>
	<li><a href="#one">Internal Exception: java.net.SocketException: Connection Reset</a></li>
	<li><a href="#two">Failed to log in: null</a></li>
	<li><a href="#three">Failed to login: The authentication servers are currently down for maintenance</a></li>
	<li><a href="#four">Invalid session. Try restarting Minecraft</a></li>
	</ul>
	<br/>
	You can click on the links above to go to a specific point in this article.<br/>
	<span style="color: red; font-weight: bold">Disclaimer:</span> Silent Client assumes no responsibility for any errors that might occur while doing things not listed in this article or messing something up. Do everything at your own risk!
	<br/><br/>
	<h3 id="one">Fixing "Internal Exception: java.net.SocketException: Connection Reset"</h3>
	If the game shows this error when trying to connect to Minecraft servers, something on your side is blocking or interfering with the game connections. Do the following to fix the problem:
	<br/><br/>
	<h6>1. Temporarily disable all VPNs, Hamachi, Antiviruses, and firewalls (especially third-party firewalls).</h6>
	They are known for blocking game connections. We do not know what third-party firewalls you have installed; you need to use an online search engine such as Google to find instructions on how to disable them. Make sure to uninstall incompatible software as well; <a href="https://minecrafthopper.net/help/known-incompatible-software/">click here</a> to find a list of them.
	<br/><br/>
	<h6>2. Whitelist the game's JREs (Java Runtime Environment) on your operating system's firewall settings.</h6>
	If Windows Firewall has blocked Minecraft's Internet access, the connection failure will occur. You can temporarily disable the firewall as mentioned above or whitelist the game to see if that's the case. If you do not know how to whitelist a game on your firewall settings on Windows, do the following:
	<br/><br/>
	<b>If you are using Silent Client:</b>
	<ol>
	<li>Press the Windows Key and type "firewall."</li>
	<li>Click on "Allow an app through Windows Firewall."</li>
	<li>Click on "Allow another app..."</li>
	<li>Click Browse, then navigate to: <br/><code>%appdata%\\.minecraft\\.silentclient\\bin\\javaw.exe</code></li>
	<li>Click Open, then Add.</li>
	<li>Click OK and open Silent Client again.</li>
	</ol>
	<br/>
	<b>If you are using Vanilla Minecraft:</b>
	<ol>
	<li>Press the Windows Key and type "firewall."</li>
	<li>Click on "Allow an app through Windows Firewall."</li>
	<li>Click on "Allow another app..."</li>
	<li>Click Browse, then navigate to: <br/><code>C:\\Program Files (x86)\\Minecraft\\runtime\\java-runtime-alpha\\windows-x64\\java-runtime-alpha\\bin\\javaw.exe</code></li>
	<li>Click Open, then Add.</li>
	<li>Click OK and open Minecraft again.</li>
	</ol>
	<br/>
	<h6>3. Try on another connection, such as mobile data via wireless hotspot or USB tethering.</h6>
	If this option fixes the problem, your network connection might have some problems. In that case, we suggest running a network troubleshooter.
	<br/><br/>
	<h6>4. Try refreshing your network settings.</h6>
	If you do not know how to do it, follow the instructions below:
	
	<ol>
	<li>Press the <b>Windows Key</b>, then type <code>cmd</code>.</li>
	<li>Under 'Command Prompt,' click <b>Run as administrator</b></li>
	<li>Type <code>netsh winsock reset</code> and press <b>Enter</b>.</li>
	<li>Type <code>netsh int ip reset</code> and press <b>Enter</b>.</li>
	<li>Type <code>ipconfig /release</code> and press <b>Enter</b>.</li>
	<li>Type <code>ipconfig /renew</code> and press <b>Enter</b>.</li>
	<li>Type <code>ipconfig /flushdns</code> and press <b>Enter</b>.</li>
	</ol>
	<br/>
	Additionally, do the following:
	<ol>
	<li>Press the <b>Windows Key</b>, then type <code>cmd</code>.</lI>
	<li>Under 'Command Prompt,' click <b>Run as administrator</b></lI>
	<li>Type <code>netsh interface tcp show global</code> and press Enter.</lI>
	<li>If Receive-Side Scaling State is disabled, type <code>netsh interface tcp set global rss=enabled</code> and press enter.</lI>
	<li>If "Receive Window Auto-Tuning Level" is disabled, type <code>netsh interface tcp set global autotuninglevel=normal</code> and press enter.</lI>
	</ol>
	<br/><br/>
	<h3 id="two">Fixing "Failed to log in: null."</h3>
	The error is often caused by Microsoft accounts being under the minimum age requirement or by misconfigured Microsoft/Xbox privacy settings.
	<br/><br/>
	<h6>1. Open your Microsoft/Xbox account Privacy Settings and change them to allow you to play on Multiplayer.</h6>
	If you do not know how to do it, follow the instructions below:
	<ol>
	<li>Log in to <a href="https://account.xbox.com/settings ">https://account.xbox.com/settings </a> with your Microsoft account.</li>
	<li>In the navigation tabs, click <b>Xbox Series X|S, Xbox One, and Windows 10 devices Online Safety</b></li>
	<li>Select <b>Allow</b> for <b>You can create and join clubs</b>, and <b>You can join multiplayer games</b>.</li>
	</ol>
	<br/>
	<h6>2. Add your Microsoft account to a Family plan.</h6>
	You need to go to <a href="https://account.microsoft.com/family/">https://account.microsoft.com/family/</a> and follow the instructions given there.
	<br/><br/>
	<h3 id="three">Fixing "Failed to login: The authentication servers are currently down for maintenance."</h3>
	<h6>1. Remove illegal non-premium account tools.</h6>
	This connection issue is likely caused by using illegal or incompatible software, which is known to corrupt your hosts list by redirecting any Mojang authentification server address to their own illicit servers. To fix this, you need to remove non-official software; then, you must fix your affected hosts file.
	<br/><br/>
	If you have used third-party authenticators like "MCLeaks", "TheAltening", "EasyMC", or anything similar on your computer, you need to switch back to the Mojang/Microsoft authenticator through the third-party authenticator you used and then uninstall it from the computer.
	<br/><br/>
	Once you have done that, you need to restore your system's hosts file. If you do not know how to do it, click the links below.
	<br/><br/>
	Windows: <a href="https://support.microsoft.com/en-us/topic/how-to-reset-the-hosts-file-back-to-the-default-c2a43f9d-e176-c6f3-e4ef-3500277a6dae">click here</a>.<br/>
	Linux: <a href="https://www.howtogeek.com/howto/27350/beginner-geek-how-to-edit-your-hosts-file/#autotoc_anchor_3">click here</a>.<br/>
	macOS: <a href="https://www.igeeksblog.com/how-to-reset-hosts-file-to-default-on-mac-windows/#macOS">click here</a>.
	<br/><br/>
	<h6>2. Check Minecraft servers' status.</h6>
	If Minecraft servers are down, the game will show the same error message. The best website to check if Minecraft servers are down/having problems is <a href="https://downdetector.com/status/minecraft/">https://downdetector.com/status/minecraft/</a>
	<br/><br/>
	If you see a big spike, it means Minecraft servers are down. In that case, the only option is to wait for Mojang or Microsoft to fix the problem.
	<br/><br/>
	<h3 id="four">Fixing "Invalid session. Try restarting Minecraft."</h3>
	This error can easily be fixed by logging out of the game and back in to refresh your session ID. If you do not know how to re-log on your account, do the following:
	<br/><br/>
	<b>If you are using Silent Client:</b>
	<ol>
	<li>Open the Silent Client launcher but do NOT launch the game.</li>
	<li>Click the Minecraft account selector above the LAUNCH button.</li>
	<li>Click the "Logout" button for your Minecraft account(s).</li>
	<li>Open the Minecraft account selector again.</li>
	<li>Click the "Add Account" button and write your Java Edition Minecraft account login information.</li>
	<li>Once you have re-added your Minecraft account in the launcher, launch the game.</li>
	<li>Connect to a server.</li>
	</ol>
	<br>
	<b>If you are using Vanilla Minecraft:</b>
	<ol>
	<li>Open the Minecraft launcher.</li>
	<li>Click on your account name and icon at the top left corner of the launcher.</li>
	<li>Click on "Log Out."</li>
	<li>Click the login button and write your Minecraft login information.</li>
	<li>Once you have done that, launch the game.</li>
	</ol>`,
	author: "kirillsaint",
};

export default multiplayer_issues;
