# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-05-12 11:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0004_auto_20160512_1103'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='unit_price',
            field=models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=6, null=True),
        ),
    ]
