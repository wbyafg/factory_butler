from django.db import models

# Create your models here.
from django.db import models



class Product(models.Model):
    product_name = models.CharField(max_length=250, unique=True)
    product_description = models.CharField(max_length=250, null=True, blank=True, default=None)
    unit_price = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True, default=0)