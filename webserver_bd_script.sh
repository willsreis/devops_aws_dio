#!/bin/bash

echo "Atualizando o servidor"
apt-get update
apt-get upgrade -y
echo "Instalando apache2"
apt-get install apache2 -y
echo "Instalando unzip"
apt-get install unzip -y
echo "Acessando /tmp"
cd /tmp
echo "Iniciando donwload do site"
wget https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip
echo "Descompactando site"
unzip main.zio
cd linux-site-dio
echo "Copiando arquivos para diretorio default do apache2"
cp -R * /var/www/html/