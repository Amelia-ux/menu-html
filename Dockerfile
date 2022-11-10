FROM ubuntu:18.04
MAINTAINER Amelia <meliamel.9977@gmail.com>
COPY . /app
RUN mkdir -p /app
CMD html /app/index.html
