
from rest_framework import serializers
from inventory.models import *
# from djmoney.serializers import Serializer as MoneySerializer




class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('product_name', 'product_description', 'unit_price')