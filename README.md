validation
input types 
elements
progress bar
datalist
meter

semantic elements: header,footer,article,section,main,aside,nav,figure,figcaption
escape character :
& : &amp;
for space : &nbsp; no break space

Multimedia element:
Audio
Video

svg usese XML
canvas uses JavaScript

PWA : Progressive Web Application they are desktop app but look like Web Application 
eg, is Outlook
===============================================================================
Integrating JS with Html
1. using the script tag
2.using url to the script file

1. inline
<input type="button" value="Click Me" onclick=alert("Html 4")/>

2.internal : inside the script tag
<script> ........</script>

3.external
<script src=" address of the script file/>

script log can either be internal or external it cannot be both
we need to create another sciprt block.

parseInt
=================================================================
WebStorage:
for example we logged in a website and then we need to not login everytime we visit the site 
then it is stored in the "Local storage"
=============================================================================================
CSS : Cascading Style Sheet
selectors:
1.element :div,p,h1,a,body
2.id - starts with #
3.class - starts with . 

for internal css we use style
but for external we use the link.

we need @import for external but for internal we use link.

link vs import.
===========================================================================================
containers: docker is a container engine
all this was possible because of Virtualization.
difference betwen VM and Container:

Container is a much lighter VM

Kubernetes has Pods instead of containers, whenever we scale it is the pods are copied instead 
of the conatiners.

Docker Hub and Docker 
docker pull hello-world
docker run hello-world
docker run -it    (interactive terminal t go inside the terminal of the docker)
docker run -it ubuntu bash
to create the image of a container we need a docker file.
docker build -t my-html-app .     :   to create container image
docker run -d -p 8080:80 my-html-app     it is used to map our current port to a new docker port
====================================================
Monitoring
node install express-status-monitor.
go to node depencies ans we have "express-status-monitor" : "^1.3.4"
and then restart the server.
to monitor:
localhost:3000/status    port numbe ris the port number of the api we are using.
go to app.js and write this line   app.use(require('express-status-monitor')())
