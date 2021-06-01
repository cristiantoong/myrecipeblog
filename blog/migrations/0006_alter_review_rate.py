# Generated by Django 3.2.1 on 2021-05-16 22:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_review'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='rate',
            field=models.PositiveSmallIntegerField(blank=True, choices=[(1, '1 - Bad'), (2, '2 - Poor'), (3, '3 - Average'), (4, '4 - Great'), (5, '5 - Excellent')]),
        ),
    ]
