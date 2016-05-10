from django.db import models

# Create your models here.
from django.db import models



class Product(models.Model):
    product_name = models.CharField(max_length=200)
    product_description = models.CharField(max_length=200)
    unit_price = models.IntegerField(default=0)