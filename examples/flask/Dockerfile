FROM python:3.12-slim-bookworm

WORKDIR /app

COPY ./src ./src

COPY requirements.txt ./requirements.txt

RUN pip install -r requirements.txt

EXPOSE 5000

CMD [ "python3", "src/main.py" ]
