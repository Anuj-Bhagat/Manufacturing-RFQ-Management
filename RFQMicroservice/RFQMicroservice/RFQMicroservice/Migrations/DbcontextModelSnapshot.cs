﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RFQMicroservice.DBContext;

#nullable disable

namespace RFQMicroservice.Migrations
{
    [DbContext(typeof(Dbcontext))]
    partial class DbcontextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("RFQMicroservice.Model.Rfq", b =>
                {
                    b.Property<int>("rfqId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("rfqId"), 1L, 1);

                    b.Property<int>("Part_Id")
                        .HasColumnType("int");

                    b.Property<string>("Quantity")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Specification")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("demandid")
                        .HasColumnType("int");

                    b.Property<string>("partName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("timetoSupply")
                        .HasColumnType("datetime2");

                    b.HasKey("rfqId");

                    b.ToTable("RFQ");
                });

            modelBuilder.Entity("RFQMicroservice.Model.Supplier", b =>
                {
                    b.Property<int>("Part_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Part_id"), 1L, 1);

                    b.Property<int>("Feedback")
                        .HasColumnType("int");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Supplier_Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Supplier_id")
                        .HasColumnType("int");

                    b.HasKey("Part_id");

                    b.ToTable("SUPPLIER");
                });
#pragma warning restore 612, 618
        }
    }
}
