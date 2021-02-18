#
#
#        ██████╗██╗  ██╗██╗   ██╗ ██████╗██╗  ██╗███████╗██╗    ██╗ █████╗ ██████╗ ██╗
#       ██╔════╝██║  ██║██║   ██║██╔════╝██║ ██╔╝██╔════╝██║    ██║██╔══██╗██╔══██╗██║
#       ██║     ███████║██║   ██║██║     █████╔╝ ███████╗██║ █╗ ██║███████║██████╔╝██║
#       ██║     ██╔══██║██║   ██║██║     ██╔═██╗ ╚════██║██║███╗██║██╔══██║██╔═══╝ ██║
#       ╚██████╗██║  ██║╚██████╔╝╚██████╗██║  ██╗███████║╚███╔███╔╝██║  ██║██║     ██║
#        ╚═════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝     ╚═╝ v1.0.0
#                                                                                      
# Chuck SWAPI v 1.0.0
# Chuck SWAPI .NET CORE C# Project
# Chuck SWAPI API Documentation https://explore.postman.com/api/8936/chuck-swapi
# SWAPI API Documentation https://explore.postman.com/api/8937/swapi

Add-Type -AssemblyName System.speech
$synth = New-Object -TypeName System.Speech.Synthesis.SpeechSynthesizer
$synth.Rate = 1

function Get-ExecuteTxT {
	param ($TxT)
	$Clean = [Text.Encoding]::Utf8.GetString([Convert]::FromBase64String($TxT))
	Write-Output $Clean
	$synth.Speak($Clean)
}

$K3Y = @( 'SGksIG15IG5hbWUgaXMgZG9uIFBhYmxvIGFuZCBJIHdpbGwgYmUgZ3VpZGluZyB5b3UgdGhyb3VnaCB0aGUgc2V0dXAgcHJvY2Vzcy4gV2hlbiB5b3UgYXJlIHJlYWR5IHRvIHByb2NlZWQgd2l0aCB0aGlzIHJldmlldywgcGxlYXNlIHByZXNzIGVudGVyLg==','V293LCBnZW50bHkhIEVhc3kgZG9lcyBpdC4uLiBMZXQgdXMgZ2V0IHN0YXJ0ZWQsIGxldHMgaGF2ZSBhIGxvb2sgYXQgd2hhdCBoYXMgYWxyZWFkeSBiZWVuIHNldHVw','T0ssIHNvLCB0aGluZ3MgYXJlIG5vdCBhcyBiYWQgYXMgSSBoYWQgZXhwZWN0ZWQuIEkgYW0gZ29pbmcgdG8gY3JlYXRlIGEgZmV3IGRpcmVjdG9yaWVzIG5vdywgSSBhbSB1c2luZyB0aGVzZSBkaXJlY3RvcmllcyB0byBzdG9yZSB0aGUgSlNPTiBTY2hlbWUgZmlsZXMsIHdoaWNoIEkgd2lsbCB1c2UgbGF0ZXIgdG8gZ2VuZXJhdGUgdGhlIHByb2plY3QuIFRoZXJlIGlzIHJlYWxseSBub3RoaW5nIGF0IGFsbCB0byB3b3JyeSBhYm91dCwgeW91ciBQQyBpcyBpbiBnb29kIGhhbmRzLiBJZiB5b3UgYXJlIHN1cmUgeW91IHdhbnQgdG8gcHJvY2VlZCwgcGxlYXNlIHZlcnkgZ2VudGx5IHRvdWNoIHRoZSBlbnRlciBrZXkh','QWxsIHRoZSBkaXJlY3RvcmllcyBoYXZlIGJlZW4gc2V0IHVwLCBJIGFtIG5vdyBnb2luZyB0byBpbnN0YWxsaW5nIHByb2plY3QgdGhlIGRlcGVuZGVuY2llcy4gVGhpcyBjb3VsZCB0YWtlIHNvbWUgdGltZSBpZiB5b3Ugd291bGQgbGlrZSB0byBnbyBhbmQgZ3JhYiBhIGN1cCBvZiBjb2ZmZWUsIHdoaWxlIEkgaW5zdGFsbCB0aGVzZSBmaWxlcyBwbGVhc2UgZG8uIE9uY2UgYWxsIHRoZSBkZXBlbmRlbmNpZXMgYXJlIGluc3RhbGxlZCBJIHdpbGwgd2FpdCBmb3IgeW91ciBnby1haGVhZCBiZWZvcmUgY29udGludWluZy4=','SGV5LCBoZXkgYXJlIHlvdSBzdGlsbCB0aGVyZT8gSSBoYXZlIGZpbmlzaGVkIGluc3RhbGxpbmcgdGhlIGRlcGVuZGVuY2llcyBhbmQgSSBhbSBub3cgZ29pbmcgdG8gZmV0Y2ggdGhlIEpTT04gc2NoZW1lIGZpbGVzIHRoYXQgSSBuZWVkIHRvIGdlbmVyYXRlIHRoZSBwcm9qZWN0LiBXaGVuIHlvdSBhcmUgcmVhZHkgcGxlYXNlIHByZXNzIGVudGVyIHRvIHByb2NlZWQu','R3JlYXQsIHdlIGFyZSBtYWtpbmcgZ29vZCBwcm9ncmVzcywgYWxsIHRoZSBzY2hlbWVzIGhhdmUgYmVlbiBkb3dubG9hZGVkIGFuZCBJIGFtIG5vdyBzZXR0aW5nIHVwIHRoZSBwcm9qZWN0IGNvbmZpZ3VyYXRpb24gZmlsZXMu','SSBoYXZlIGZpbmlzaGVkIGNyZWF0aW5nIHRoZSBwcm9qZWN0IGNvbmZpZ3VyYXRpb24gZmlsZXMgYW5kIEkgYW0gbm93IGJ1c3kgZ2VuZXJhdGluZyB0aGUgcHJvamVjdCBmaWxlcyBmcm9tIHRoZSBKU09OIHNjaGVtZXMgd2UgZG93bmxvYWRlZCBlYXJsaWVyLg==','R29vZCBOZXdzLCB0aGUgcHJvamVjdCBoYXMgYmVlbiBnZW5lcmF0ZWQgYW5kIC5OZXQgQ29yZSBoYXMgYmVlbiBpbnN0YWxsZWQ=','TXkgam9iIGhlcmUgaXMgZG9uZSwgY29kZSBnZW5lcmF0aW9uIGlzIG5vdyBjb21wbGV0ZSBhbmQgdGhlIGFwcGxpY2F0aW9uIGlzIG9wZXJhdGlvbmFsLiBJIGhvcGUgdGhhdCB5b3UgaGF2ZSBhIHdvbmRlcmZ1bCBkYXkgZnVydGhlciwgYWxsIHRoZSBiZXN0LCBkb24gUGFibG8u','U29tZSBiYWQgbmV3cyBJIGFtIGFmcmFpZCwgdGhlcmUgaXMgYW4gaXNzdWUuIFRoZSBpc3N1ZSB3b3VsZCBhcHBlYXIgdG8gYmUgd2l0aCB5b3VyIGRlcGVuZGVuY2llcywgcGxlYXNlIGRvdWJsZS1jaGVjayB0aGUgcmVhZCBtZSBmaWxlLCBvciBzZW5kIG1lIGFuIGVtYWlsIGRlc2NyaWJpbmcgdGhlIGlzc3VlIHNvIHRoYXQgSSBjYW4gaGVscCBmaXggdGhlIGJ1aWxkLg==')

function Start-Music
{
  $code = {
    $player = New-Object -ComObject 'MediaPlayer.MediaPlayer'
	$URLs = @(	'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3','https://cf-hls-media.sndcdn.com/playlist/EXb975kZxMsR.128.mp3','https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Oddio_Overplay/Juanitos/Exotica/Juanitos_-_06_-_Exotica.mp3','https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Creative_Commons/Ketsa/Raising_Frequecy/Ketsa_-_13_-_Mission_Ready.mp3')
	$URLs | Get-Random
	$URL = Get-Random -InputObject $URLs
	Write-Output $URL
    $player.Open($URL)
    $player
  }

  $script:ps = [PowerShell]::Create()
  $script:player = @($ps.AddScript($code).Invoke())[0]
}

function Stop-Music
{
  if ($script:player -ne $null)
  {
    $script:player.Stop()
    Remove-Variable -Name player -Scope script
  }
  if ($script:ps -ne $null)
  {
    $script:ps.Runspace.Close()
    $script:ps.Dispose()
    Remove-Variable -Name ps -Scope script
  }
}
Start-Music


function Generation-Complete
{

}