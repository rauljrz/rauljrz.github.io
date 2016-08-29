---
published: true
title: Opps... Que hacer cuando no funciona ".htaccess" en Apache?
layout: post
---
..No es la primera vez que me sucede... pero siempre me olvido de documentarlo. 
Pueden ser varias las razones, pero por lo general se debe a la configuración de "AllowOverride" [http://httpd.apache.org/docs/2.0/mod/core.html#allowoverride] 

Esta directiva determina que comandos pueden ejecutarse dentro de los ficheros .htacces. 
Por defecto, y por seguridad, viene establecido a "None", pero, para que funcione el redireccionamiento en el .htaccess, debemos cambiarlo a “All” y entonces empezará a hacer caso a los “RewriteUrl”. 

Podemos determinar que tipo de comandos son aceptados utilizado otros valores.

Para ello deberás buscar el archivo de configuración del Apache (httpd.conf). Que por lo general esta en la carpeta conf/httpd.conf

Y en este archivo buscar la directiva "AllowOverride" y cambiar el valor de "None" a "All".

