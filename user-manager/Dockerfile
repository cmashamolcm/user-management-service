FROM openjdk:11.0.9.1

VOLUME /tmp
WORKDIR /user-manager

COPY target/*.jar user-manager.jar

#COPY wait-for-my-sql.sh /wait-for-mysql.sh

#RUN chmod +x /wait-for-mysql.sh

#ENTRYPOINT ["/wait-for-mysql.sh"]

CMD ["java","-jar","user-manager.jar"]