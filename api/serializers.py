from django.db.models import fields
from .models import *
from rest_framework import serializers


class MemoirsSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = Memoir
        fields = '__all__'