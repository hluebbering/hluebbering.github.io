Sys.setenv(SPOTIFY_CLIENT_ID = '3899576b5fcb4c458beba2cce99aa1b6')
Sys.setenv(SPOTIFY_CLIENT_SECRET = '092a0b9b1e074abba82ce61ba6137aea')
access_token <- spotifyr::get_spotify_access_token(client_id = "3899576b5fcb4c458beba2cce99aa1b6", client_secret = "092a0b9b1e074abba82ce61ba6137aea")





df <- spotifyr::get_my_playlists()

x <- spotifyr::get_playlist_cover_image("1nvpVNmzL7Vi1pXcQEiaLx")
x <- spotifyr::get_playlist_cover_image("5EJyFuoHCQAgWCpF8ShZcM")
x <- spotifyr::get_playlist_cover_image("7JJd5q4ZPK0P1Q4atTcpkR")
x <- spotifyr::get_playlist_cover_image("4lSykOrQfnAiCgtHKVudTT")
x <- spotifyr::get_playlist_cover_image("3NqHrY8dm9DBq29GowDFtw")
x <- spotifyr::get_playlist_cover_image("7BG5HX9mvitFNX06ju7j4X")



library(magick)

tiger <- image_read(path = x$url[1])
print(tiger)
# Render svg to png bitmap
image_write(tiger,quality = 100, 
            path = "static/images/spotify/playlist6.png", format = "png")
