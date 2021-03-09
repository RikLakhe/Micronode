# Micro-node

Microservices is a service-oriented architecture pattern wherein applications are built as a collection of various smallest independent service units.

<ol>
<li>Miconode-core [port:7001]</li>
<li>Miconode-company [port:7002]</li>
<li>Miconode-user [port:7003]</li>
<li>Miconode-event [port:7004]</li>
<li>React APP [TDD] [port:3000]</li>
</ol>

## 1. Why ?

<ul>
<li>Continuous delivery</li>
<li>Maximize deployment velocity</li>
<li>Faster innovation to adapt to changing market conditions</li>
<li>Enable developers</li>
<li>Reduce costs</li>
</ul>

## 2. How ? 
When using microservices, you isolate software functionality into multiple independent modules that are individually responsible for performing precisely defined, standalone tasks. These modules communicate with each other through simple, universally accessible application programming interfaces (APIs)

## 3. What ?


# Project Detail

### Architecture

![GitHub Logo](/img/micronodeArch.png)

### Modules

![GitHub Logo](/img/modulesDetail.png)

### Sequence Diagram

![GitHub Logo](/img/SystemSeqDiag.png)

![GitHub Logo](/img/userSeqDiag.png)


## Getting Started

Start all the containers from docker:

```sh
docker-compose up
```

List of all running containers in docker:

```sh
docker ps
```

go to specific docker container bash : 

```sh
docker exec -it [container-id] bash
```